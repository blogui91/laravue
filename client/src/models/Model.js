import _ from 'lodash';

export
default class Model {

	constructor() {
		this.errors = [];
		this.required_fields_for_update = [];
		this.required_fields_for_create = [];
		this.messages = [];
		this.attributes = {};

		this.validateModel = this.validateModel.bind(this);
		this.fill = this.fill.bind(this);
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


	validateModel(operation) {
		operation = operation == 'create' ? 'required_fields_for_create' : 'required_fields_for_update';
		var valid = true;
		this[operation].forEach((field) => {
			if (!(this.attributes[field])) {
				valid = false;
				if (typeof this.messages[field] !== 'undefined') {
					this.errors.push(this.messages[field]);
				} else {
					var err_str = `The field ${field} is required`;
					this.errors.push(err_str);
				}
			}

		});

		valid ? this.errors = [] : this.errors;

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