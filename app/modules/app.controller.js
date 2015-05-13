(function(){ 
	'use strict';

	var appController = function(){
		var ctrl = this;

		ctrl.message = 'Simple message for the home page';

		return ctrl;
	};

	angular.module('testApp')
		.controller('AppCtrl', [appController]);
}());