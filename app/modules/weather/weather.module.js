(function(){ 
	'use strict';

	var config = function($stateProvider) {
		$stateProvider
			.state('currentWeather', {
				url:'/current/weather',
				templateUrl: 'modules/weather/current.view.html'
			});
	};

	angular.module('weather', ['ui.router'])
		.config(['$stateProvider', config]);
}());