(function(){ 
	'use strict';

	var weatherService = function($http){
		var getCurrentWeather = function(city){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial');
		};

		return {
			GetCurrentWeather: getCurrentWeather
		};
	};

	angular.module('weather')
		.factory('WeatherSvc', ['$http', weatherService]); 
}());