## Basics of Testing AngularJS
Make sure to bring angular-mocks into your test project (no need to add it to your index.html file, since we will just be using this for testing)

```js
files: [
  'app/lib/angular/angular.min.js',
  'app/lib/angular-mocks/angular-mocks.js',
  'app/modules/**/*.module.js',
  'app/modules/**/*.js'
],
```

### Creating a Mock Module
Create the mock-version of the module you are testing in

```js
describe('Some super thing', function() {
	
	beforeEach(module('my-module'));
	
	/* Other code removed for brevity	*/

});
```