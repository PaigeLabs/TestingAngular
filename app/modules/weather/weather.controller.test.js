describe('Weather controller', function() {
	
	beforeEach(module('weather'));

	var weatherController, weatherService, deferred, $scope, city;
	beforeEach(inject(function($controller, $q, $rootScope, _WeatherSvc_) {
		weatherService = _WeatherSvc_;
		$scope = $rootScope.$new();
		weatherController = $controller('WeatherCtrl', {
			$scope:$scope, 
			WeatherSvc:weatherService
		});
		deferred = $q.defer();
		spyOn(weatherService, 'GetCurrentWeather').and.returnValue(deferred.promise);
		city = 'MyCity,KS';
	}));

	it('should exist', function(){
		expect(weatherController).toBeDefined();
	});

	describe('When no city is set', function() {
		it('should not call the weather service', function(){
			weatherController.loadCurrentWeather();
			expect(weatherService.GetCurrentWeather).not.toHaveBeenCalled();
		});
		
		it('should log the error', function(){
			spyOn(console, 'error').and.callThrough();
			weatherController.loadCurrentWeather();
			expect(console.error).toHaveBeenCalled();
			expect(weatherController.errorMessage).toEqual('No city provided.');
		});		
	});

	describe('When the city is set', function() {
		it('should call the weather service if a city is set', function(){
			weatherController.city = city;
			weatherController.loadCurrentWeather();
			expect(weatherService.GetCurrentWeather).toHaveBeenCalledWith(city);
		});

		it('should get the current weather for the specified city', function(){
			weatherController.city = city;
			weatherController.loadCurrentWeather();
			deferred.resolve({data:{cod: 200, someValue:'object'}});
			$scope.$apply();
			expect(weatherController.currentWeather).toEqual({cod:200, someValue:'object'});
		});

		describe('when the service returns an error', function(){
			it('should return an error to display', function(){
				weatherController.city = city;
				weatherController.loadCurrentWeather();
				deferred.reject({data:{error:'something went wrong'}});
				$scope.$apply();
				expect(weatherController.errorMessage).toEqual('something went wrong');				
			});
		});

		describe('When the service returns an error code as a success', function() {
			it('should display the error message', function(){
				weatherController.city = city;
				weatherController.loadCurrentWeather();
				deferred.resolve({"message":"Error: Not found city","cod":"404"});
				$scope.$apply();
				expect(weatherController.errorMessage).toEqual("Error: Not found city");				
			});
		});
	});



});