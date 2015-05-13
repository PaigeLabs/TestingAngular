(function(){ 
	'use strict';
	
	var config = function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'modules/home.view.html'
			});

		$urlRouterProvider.otherwise('/');
	};

	angular.module('testApp', ['ui.router', 'weather'])
		.config(['$stateProvider', '$urlRouterProvider', config]);
}());