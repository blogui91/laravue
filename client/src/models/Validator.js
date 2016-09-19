import RexExp from './regexp';

var array_options = ['required','email','max','min','number'];

function capitalize(string){
	return string.replace(/\b\w/g, function(l){ return l.toUpperCase() })
}

class Validator{
	
	constructor(){

		this.validator = {
			types: {
				required: 'This field is required',
				email: 'This field should be an email',
				min: 'You are under the minimum, write a higher value',
				max: 'You are over the maximum, write a lower value',
				number: "Value not valid, It must be a number"
			}
		}

		this.validate = this.validate.bind(this);
		this.checkMaxMin = this.checkMaxMin.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
		this.checkRequired = this.checkRequired.bind(this);
	}

	validate(input, rule){
		var self = this;
		var result = false; 
		array_options.forEach(function(option){
			if(rule == option){
				var method = 'check'+capitalize(option)
				result = self[method](input);

			}else if(rule.indexOf('min')  > -1 || rule.indexOf('max') > -1){
				result = self.checkMaxMin(rule,input);
			}
		});
		return result;
	}

	checkNumber(input){
		if(isNaN(parseFloat(input))){
			return false
		}
		return true;
	}

	checkMaxMin(rule,input){
		var valid = false;
		
		if(input == null){
			return valid;
		}

		var obj_rule = rule.split(':');
		var value = obj_rule[1];
		var key = obj_rule[0];
		

		input = parseFloat(input);

		if(key == 'min'){
			if(input >= value){
				valid = true;
			}

		}else if(key == 'max'){
			if(input <= value){
				valid = true;
			}
		}

		return valid;
	}

	checkEmail(input){
		var is_valid = false;
		var re = RexExp.email;
        if(re.test(input)){ // If it does not match
          is_valid = true;
        }
        return is_valid;
	}

	checkRequired(input){
		if(input != null && input != ''){
			return true;
		}
		return false;
	}
	
}


export default Validator