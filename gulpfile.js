var gulp = require('gulp'),
		inject = require('gulp-inject'),
		karma = require('gulp-karma'),
		connect = require('gulp-connect');

var paths = {
	html: ['app/**/*.html'],
	scripts: ['app/modules/**/*.module.js', 'app/modules/**/*.js', '!app/modules/**/*.test.js'],
	unitTests: ['app/modules/**/*.test.js']
};

gulp.task('inject', function(){
	return gulp.src('app/index.html')
		.pipe(inject(gulp.src(paths.scripts, {read:false}),{
			ignorePath:'/app'
		}))
		.pipe(gulp.dest('./app'));
});

gulp.task('test', function(){
	return gulp.src('./nonexistent')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err){
			console.log(err);
			this.emit('end');
		});
});

gulp.task('serve', function(){
	connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(paths.html)
    .pipe(connect.reload());
});

gulp.task('dev', ['inject', 'test', 'serve'], function(){
	gulp.watch(paths.scripts, ['inject', 'test', 'html']);
	gulp.watch(paths.unitTests, ['test']);
	gulp.watch(paths.html, ['html']);
});