(function(){ 
	'use strict';

	var appController = function(){
		var ctrl = this;

		ctrl.message = 'Simple message for the page';

		return ctrl;
	};

	angular.module('testApp')
		.controller('AppCtrl', [appController]);
}());