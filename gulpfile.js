var gulp = require('gulp'),
		inject = require('gulp-inject'),
		karma = require('gulp-karma');

var paths = {
	scripts: ['app/modules/**/*.module.js', 'app/modules/**/*.js', '!app/modules/**/*.test.js'],
	unitTests: ['app/modules/**/*.test.js']
};

gulp.task('inject', function(){
	return gulp.src('app/index.html')
		.pipe(inject(gulp.src(paths.scripts, {read:false})))
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

gulp.task('dev', ['inject', 'test'], function(){
	gulp.watch(paths.scripts, ['inject', 'test']);
	gulp.watch(paths.unitTests, ['test'])
});