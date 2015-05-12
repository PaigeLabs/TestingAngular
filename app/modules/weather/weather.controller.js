(function(){ 
	'use strict';

	var weatherController = function(WeatherSvc){
		var ctrl = this;

		ctrl.loadCurrentWeather = function(){
			WeatherSvc.GetCurrentWeather();
		};

		return ctrl;
	};

	angular.module('weather')
		.controller('WeatherCtrl', ['WeatherSvc', weatherController]);
}());