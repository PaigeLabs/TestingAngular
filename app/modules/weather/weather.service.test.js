describe('Weather Service', function() {
	
	beforeEach(module('weather'));

	var weatherService, $httpBackend;
	beforeEach(inject(function($injector, _WeatherSvc_) {
		httpBackend = $injector.get('$httpBackend');
		weatherService = _WeatherSvc_;
		httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=city&units=imperial').respond({simple:'object'});
	}));

	it('should exist', function(){
		expect(weatherService).toBeDefined();
	});

	it('should be able to get the current weather for a specific city', function(){
		weatherService.GetCurrentWeather('city').then(
			function(result){
				expect(result).toEqual({simple:'object'});
			},
			function(err){
				fail(err);
			});
	});

});