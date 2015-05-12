(function(){ 
	'use strict';

	var weatherService = function($http){
		var getCurrentWeather = function(){
			return $http.get('');
		};

		return {
			GetCurrentWeather: getCurrentWeather
		};
	};

	angular.module('weather')
		.factory('WeatherSvc', ['$http', weatherService]); 
}());