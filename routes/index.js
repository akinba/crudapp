'use strict'

const routes = [
	require('./bina')
];

module.exports = function router(app,db) {
	return routes.forEach((route)=>{
		route(app,db);
	});
};