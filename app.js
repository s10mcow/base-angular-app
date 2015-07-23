(function () {
	'use strict';

	angular.module('APP-NAME', [
		
		//3rd Parties
		'ngAnimate',
		'ngCookies',
		'ngTouch',
		'ngSanitize',
		'restangular',
		'ui.router',
		'angulartics.google.analytics',
		
		//Config
		'APP-NAME.config',
		
		//Constants
		'APP-NAME.constants',
		
		//modules
		'APP-NAME.base',
		'APP-NAME.components',
		
		//routes
		'APP-NAME.home'
	
	
	])

}());