'use strict';
const HOST = location.origin;
const API = '/api';
const URL = HOST + API;

var routes = {
	api: {
		users: URL + '/users',
	}
}



export
default routes;