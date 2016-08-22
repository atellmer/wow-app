var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clc = require('cli-color');

var config = require('./config');

console.log(clc.green('-------------------------------------------'));
console.log(clc.green('Mode: ') + clc.yellow(config.mode));
console.log(clc.green('Debug: ') + clc.yellow(config.debug));
console.log(clc.green('Dev Server: ' + clc.yellow('Localhost:'  + config.port)));
console.log(clc.green('-------------------------------------------'));

var path = {
	root: config.root,
	dist: config.root + 'dist/'
};

var task = {
	componentScripts: '',
	componentStyles: '',
	componentTemplates: '',
};

//connect
gulp.task('connect', function () {
	connect.server({
		root: path.root.slice(0, -1),
		port: config.port,
		livereload: true
	});
});

//scripts
gulp.task('scripts', function () {
	task.componentScripts = gulp.src([
		path.root + '**/*.module.js',
		path.root + '**/*.config.js',
		path.root + '**/*.service.js',
		path.root + '**/*.component.js',
		path.root + '**/*.directive.js',
		path.root + '**/*.controller.js'
		])
		.pipe(concat('bundle.js'));
				
	if (!config.debug) {
		task.componentScripts
			.pipe(uglify());
	}
	
	task.componentScripts = task.componentScripts
		.pipe(gulp.dest(path.dist))
		.pipe(connect.reload());
				
	return task.componentScripts;
});

//styles
gulp.task('styles', function () {
	task.componentStyles = gulp.src([
		path.root + '**/shared.styl',
		path.root + '**/*.styl'])
		.pipe(concat('bundle.styl'))
		.pipe(stylus({
			use: [nib()],
			compress: !config.debug
		}))
		.pipe(gulp.dest(path.dist))
		.pipe(connect.reload());
			
	return task.componentStyles;
});

//templates
gulp.task('templates', function () {
	task.componentTemplates = gulp.src(path.root + '**/*.html')
		.pipe(connect.reload());
		
	return task.componentTemplates;
});

//watch
gulp.task('watch', function () {
	gulp.watch(path.root + '**/*.js', ['scripts']);
	gulp.watch(path.root + '**/*.styl', ['styles']);
	gulp.watch(path.root + '**/*.html', ['templates']);
});

gulp.task('default', [
	'connect', 
	'scripts', 
	'styles', 
	'templates', 
	'watch'
]);