'use strict';
const HOST = location.origin;
const PREFIX = '/api';
const URL = HOST + PREFIX;

var routes = {
	api: {
		users: URL + '/users',
	}
}



export
default routes;