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

		console.log(user)

		if (typeof user !== 'undefined') {
			this.fill(user);
		}


		console.log(this.attributes)

		this.rules_for_create = {
			'first_name' : 'required',
			'last_name':'required',
			'email' : 'required|email'
		};
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