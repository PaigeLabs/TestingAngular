describe('Weather controller', function() {
	
	beforeEach(module('weather'));

	var weatherController, weatherService, deferred, $scope, city;
	beforeEach(inject(function($controller, $q, $rootScope, _WeatherSvc_) {
		weatherService = _WeatherSvc_;
		$scope = $rootScope.$new();
		weatherController = $controller('WeatherCtrl', {$scope:$scope, WeatherSvc:weatherService});
		deferred = $q.defer();
		spyOn(weatherService, 'GetCurrentWeather').and.returnValue(deferred.promise);
		city = 'MyCity,KS';
	}));

	it('should exist', function(){
		expect(weatherController).toBeDefined();
	});

	it('should call the weather service for the current weather', function(){
		weatherController.loadCurrentWeather(city);
		expect(weatherService.GetCurrentWeather).toHaveBeenCalled();
	});

	it('should get the current weather for the specified city', function(){
		weatherController.loadCurrentWeather(city);
		deferred.resolve({simple:'object'});
		$scope.$apply();
		expect(weatherController.currentWeather).toEqual({simple:'object'});
	});
});