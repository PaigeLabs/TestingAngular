describe('Application module', function() {
	it('should exist', function(){
		try{
			angular.module('testApp');
		}catch(err){
			fail('Application module should exist but doesn\'t.');
		}
	});

	beforeEach(module('testApp'));

	describe('routing', function(){
		it('should be able to get to the home page', inject(function($state){
			expect($state.href('home')).toEqual('#/');
		}));
	});

});