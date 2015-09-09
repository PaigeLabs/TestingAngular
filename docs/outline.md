* Unit Testing AngularJS
	* Install Jasmine
		* jasmine-core

	* Install Karma
		* karma-cli
		* gulp-karma

	* Install PhantomJS
		* karma-phantomjs-launcher

	* describe
	* beforeEach
	* afterEach
	* it
		* expect
			* toBe()
			* toEqual()
			* not.toBe()
			* toBeUndefined()	
	* spyOn(object, "functionName").and.returnValue() 
		* .and.callThrough()
		* .and.stub() // returns to an originally “faked” behavior
		* expect(foo.func).toHaveBeenCalled()
		* expect(foo.func).toHaveBeenCalledWith('someArg')
		* expect(foo.func.calls.any()).toEqual(false)
		* expect(foo.func.calls.count()).toEqual(2)
		* expect(foo.func.calls.argsFor(0)).toEqual('someArg')
		* expect(someThing).toEqual(jasmine.any(Object))
		* expect(someThing).toEqual(jasmine.anything())

	* $httpBackend
		* $httpBackend.expect('POST', 'http://some.url.com')
		* $httpBackend.when('GET', 'http://some.url.com').respond({some:'object'})
		* flush
		* verifyNoOutstandingExpectation()
		* verifyNoOutstandingRequest()
		* resetExpectations()

	* xdescribe
	* xit
