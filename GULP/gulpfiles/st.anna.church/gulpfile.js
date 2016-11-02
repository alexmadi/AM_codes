'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');

// -----------------------------------------------------------------------------
// Configuration / settings 
// -----------------------------------------------------------------------------
//var input = 'scss/**/*.scss',
    var input = '../../OpenServer/domains/st-anna-church.com.ua/wp-content/themes/ample/scss/**/*.scss',
    output = '../../OpenServer/domains/st-anna-church.com.ua/wp-content/themes/ample';
    
var options = {
    sass: {
        outputStyle: 'extended'
    }
};

// -----------------------------------------------------------------------------
// Sass compilation
// -----------------------------------------------------------------------------
gulp.task('sass', function () {
    return gulp.src(input)
        .pipe(sourcemaps.init())
        .pipe(sass(options.sass).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(output));
});

// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------
gulp.task('watch', function() {
    gulp.watch(input, ['sass']).on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});

gulp.task('default', ['sass', 'watch']);

