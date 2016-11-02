'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    gutil       = require( 'gulp-util'),
    ftp         = require( 'vinyl-ftp');

// -----------------------------------------------------------------------------
// Configuration / settings 
// -----------------------------------------------------------------------------
var input = 'scss/**/*.scss',
    output = './';


var options = {
    sass: {
        outputStyle: 'extended'
    }
};


/** Configuration **/
var user = process.env.FTP_USER,
    password = process.env.FTP_PWD,
    host = '31.220.16.225',
    port = 21,
    localFilesGlob = ['*.{php,css,txt}'],
    //localFilesGlob = ['*'],
    mainHostFolder = 'public_html\\',
    remoteFolder = '',
    localFolder = '',
    localFolderNoFileName = '',
    localFolderSlash = '';



// helper function to build an FTP connection based on our configuration
function getFtpConnection() {
    return ftp.create({
        host: '31.220.16.225',
        port: 21,
        user: 'u377729462',
        password: 'Hlyfcrtkjslfv93',
        parallel: 5,
        log: gutil.log
    });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {

    var conn = getFtpConnection();

    return gulp.src(localFilesGlob, { base: '.', buffer: false })
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
    ;
});

gulp.task('ftp-deploy-watch', function() {

    var conn = getFtpConnection();

    gulp.watch(localFilesGlob)
    .on('change', function(event) {
       console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);
      localFolder = event.path.substring(event.path.lastIndexOf("wp-content"));
      localFolderNoFileName = localFolder.substr(0, localFolder.lastIndexOf("\\"));
      remoteFolder = mainHostFolder + localFolderNoFileName;
      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
      ;
    });
});

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

gulp.task('default', ['sass', 'ftp-deploy-watch', 'watch']);
// if local
//gulp.task('default', ['sass', 'watch']);
