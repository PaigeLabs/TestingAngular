describe('Weather Module', function() {

	it('should exist', function(){
		try{
			angular.module('weather');
		}catch(e){
			fail('Weather module should exist but doesn\'t.');
		}
	});

	describe('routing', function() {
		
		beforeEach(module('weather'));

		it('should be able to get to the current weather page', inject(function($state){
			expect($state.href('currentWeather')).toEqual('#/current/weather');
		}));
	});

});