describe('Weather controller', function() {
	
	beforeEach(module('weather'));

	var weatherController, weatherService;
	beforeEach(inject(function($controller, _WeatherSvc_) {
		weatherService = _WeatherSvc_;
		weatherController = $controller('WeatherCtrl', {WeatherSvc:weatherService});
	}));

	it('should exist', function(){
		expect(weatherController).toBeDefined();
	});

	it('should call the weather service for the current weather', function(){
		spyOn(weatherService, 'GetCurrentWeather').and.callFake(function(){
			// do nothing on purpose;
		});
		weatherController.loadCurrentWeather();
		expect(weatherService.GetCurrentWeather).toHaveBeenCalled();
	});
});