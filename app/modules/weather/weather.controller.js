(function(){ 
	'use strict';

	var weatherController = function(WeatherSvc){
		var ctrl = this;

		ctrl.loadCurrentWeather = function(){
			if(ctrl.city){
				WeatherSvc.GetCurrentWeather(ctrl.city).then(
					function(result){
						if(result.data.cod === 200){
							delete ctrl.errorMessage;
							ctrl.currentWeather = result.data;
						}else{
							console.error(result);
							ctrl.errorMessage = result.data.message;
						}
					},
					function(err){
						console.error(err);
						ctrl.errorMessage = err.message;
					});
			}else{
				ctrl.errorMessage = 'No city provided.';
				console.error('No city provided.');
			}
		};

		return ctrl;
	};

	angular.module('weather')
		.controller('WeatherCtrl', ['WeatherSvc', weatherController]);
}());