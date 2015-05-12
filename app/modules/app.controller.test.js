describe('Application Controller', function() {
	
	beforeEach(module('testApp'));

	var appController;
	beforeEach(inject(function($controller){
		appController = $controller('AppCtrl');
	}));

	it('should exist', function(){
		expect(appController).toBeDefined();
	});
});