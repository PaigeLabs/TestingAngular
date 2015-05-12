(function(){ 
	'use strict';

	var weatherService = function(){
		var getCurrentWeather = function(){

		};

		return {
			GetCurrentWeather: getCurrentWeather
		};
	};

	angular.module('weather')
		.factory('WeatherSvc', weatherService); 
}());