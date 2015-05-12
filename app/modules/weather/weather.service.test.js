describe('Weather Service', function() {
	
	beforeEach(module('weather'));

	var weatherService, $httpBackend;
	beforeEach(inject(function($injector, _WeatherSvc_) {
		httpBackend = $injector.get('$httpBackend');
		weatherService = _WeatherSvc_;
		httpBackend.expectGET('').respond({simple:'object'});
	}));

	it('should exist', function(){
		expect(weatherService).toBeDefined();
	});

	it('should be able to get the current weather', function(){
		weatherService.GetCurrentWeather().then(
			function(result){
				expect(result).toEqual({simple:'object'});
			},
			function(err){
				fail(err);
			});

	});

});