describe('Weather Module', function() {

	it('should exist', function(){
		try{
			angular.module('weather');
		}catch(e){
			fail('Weather module should exist but doesn\'t.');
		}
	});
});