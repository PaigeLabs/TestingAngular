describe('Application module', function() {
	it('should exist', function(){
		try{
			angular.module('testApp');
		}catch(err){
			fail('Application module should exist but doesn\'t.');
		}
	});
});