(function(){ 
	'use strict';

	var weatherController = function(WeatherSvc){
		var ctrl = this;

		ctrl.loadCurrentWeather = function(){
			WeatherSvc.GetCurrentWeather(ctrl.city).then(
				function(result){
					ctrl.currentWeather = result;
				});
		};

		return ctrl;
	};

	angular.module('weather')
		.controller('WeatherCtrl', ['WeatherSvc', weatherController]);
}());