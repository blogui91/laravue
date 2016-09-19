import Model from './Model';

class User extends Model {

	constructor(user) {
		super();

		this.attributes = {
			id: null,
			first_name: null,
			last_name: null,
			email: null,
			notes: null,
			avatar: null
		};

		if (typeof user !== 'undefined') {
			this.fill(user);
		}

		this.rules_for_creation = {
			'first_name': 'required',
			'last_name': 'required',
			'email': 'required|email'
		};


		this.messages = {
			first_name: {
				required: 'Este campo es requerido'
			}
		}
		this.rules_for_update = {};
	}


	get id() {
		return this.attributes.id;
	}

	set id(id) {
		this.attributes.id = id;
	}

	get first_name() {
		return this.attributes.first_name;
	}

	set first_name(first_name) {
		this.attributes.first_name = first_name;
	}

	get fullname() {
		return this.attributes.first_name + " " + this.attributes.last_name;
	}

	get last_name() {
		return this.attributes.last_name;
	}

	set last_name(last_name) {
		this.attributes.last_name = last_name;
	}

	get email() {
		return this.attributes.email;
	}

	set email(email) {
		this.attributes.email = email;
	}

	set avatar(avatar) {
		this.attributes.avatar = avatar
	}

	get avatar() {
		return this.attributes.avatar
	}


}

export
default User;