## Configuring Karma

```bash
karma init
```

when asked about files: 'app/modules/**/*.js' to start

add: 'app/lib/angular/angular.min.js' before the ** files

so that the files array looks like

```js
// list of files / patterns to load in the browser
files: [
  'app/lib/angular/angular.min.js',
  'app/modules/**/*.js'
],
```
