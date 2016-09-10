import endpoints from '../endpoints';
import Vue from 'vue';

export
default {
	update(userData) {
		var id = userData.id;
		var user_promise = new Promise((resolve, reject) => {
			Vue.http.put(endpoints.api.users + '/' + id, userData)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});

		return user_promise;
	},
	find(userId) {
		var user_promise = new Promise((resolve, reject) => {
			Vue.http.get(endpoints.api.users + '/' + userId)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});

		return user_promise;
	},
	delete(userId) {
		var user_promise = new Promise((resolve, reject) => {
			Vue.http.delete(endpoints.api.users + '/' + userId)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});

		return user_promise;
	},
	create(newUser) {
		var user_promise = new Promise((resolve, reject) => {
			Vue.http.post(endpoints.api.users, newUser)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});

		return user_promise;
	}



}