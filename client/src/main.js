import Vue from 'vue'
import moment from 'moment';
import VueResource from 'vue-resource';
import _ from 'lodash';

//Variables To share globally 
import state from './stores';

//Installing Vue dependecies
Vue.use(VueResource);

//creating helpers
Vue.prototype.$moment = moment;
Vue.prototype.$_ = _;


//Install out components
import ComponentsProvider from './Components.provider.js';
ComponentsProvider.install(Vue);

//Laravel CSRF protection
Vue.http.interceptors.push((request, next) => {
	if (document.getElementById('_token')) {
		request.headers['X-CSRF-TOKEN'] = document.getElementById('_token')
			.getAttribute('content');
	}

	if (request.method === 'put' || request.method === 'patch' || request.method === 'delete') {
		if (typeof request.body === "object" && request.body != null) {
			request.body._method = request.method;
		} else {
			request.body = {
				_method: request.method
			};
		}
		request.method = 'post';
	}
	next();
});


var vm = new Vue({
	el: 'html',
	data: {
		state
	},
	methods: {},
	events: {},
	ready() {}
});

export
default vm