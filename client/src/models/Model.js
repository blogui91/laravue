import _ from 'lodash';
import Validator from './Validator';

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class Model extends Validator{

	constructor() {
		super();
		this.errors = {};
		this.rules_for_update = [];
		this.rules_for_creation = [];
		this.messages = [];

		this.attributes = {};

		this.validateModel = this.validateModel.bind(this);
		this.fill = this.fill.bind(this);
		this.isInvalid = this.isInvalid.bind(this);
	}


	fill(data) {
		if (typeof data != 'undefined') {
			_.each(this.attributes, function(attribute, key) {
				if (typeof data[key] !== 'undefined') {
					this.attributes[key] = data[key]
				}
			}.bind(this));
		}
	}


	isInvalid(attribute){
		this.validateModel('create');
    	var attr = _.find(this.errors,attribute);

    	if(attr){
    		return true;
    	}
    	return false;
    }

    getErrors(attribute){
    	var attr = _.find(this.errors,attribute);

    	if(typeof this.errors[attr] !='undefined'){
    		return this.errors[attribute];
    	}
    	return null;	
    }


	validateModel(operation) {
		operation = operation == 'create' ? 'rules_for_creation' : 'rules_for_update';
		var valid = true;
		this.errors = {};

		//get typeof operation (create/update) and iterate for each item
		var vm = this;
		var action = this[operation];

		_.each(action, function(rules, field){
			//Check if field is an array or string
			if(rules.constructor != Array){
				action[field] = rules.split('|');
			}
		});


		//Validate fields

		_.each(this.attributes, function(value,attr){
			//console.log(value, attr);
			if(typeof action[attr] !== 'undefined'){
				var rules = action[attr];

				rules.forEach(function(rule){

					var result = vm.validate(value, rule);

					if(!result){

						if(typeof vm.messages[attr] != 'undefined'){
							var attr_msgs = vm.messages[attr]; // get messages from array messages
							if(typeof vm.errors[attr] == 'undefined'){
								vm.errors[attr] = [];
							}

							var rule_msg = attr_msgs[rule];

							if(typeof attr_msgs[rule] == 'undefined'){
								rule_msg = vm.validator.types[rule]
							}

							vm.errors[attr].push(rule_msg); 
						}else{

							if(typeof vm.errors[attr] == 'undefined'){
								vm.errors[attr] = [];
							}

							if(rule.indexOf('min') > -1 || rule.indexOf('max') > -1){
								rule = rule.split(':')[0];
							}

							vm.errors[attr].push(vm.validator.types[rule]);
						}
	
					}
										
				});
			}


		});

		//valid = true;
		valid = isEmpty(this.errors) ? true : false;
		return valid;
	}

	validForCreation() {
		return this.validateModel('create');
	}


	validForUpdate() {
		return this.validateModel('update');
	}

	showErrors() {
		return this.messages;
	}

}

export
default Model;