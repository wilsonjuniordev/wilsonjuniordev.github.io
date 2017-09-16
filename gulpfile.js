var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    cleanCSS    = require('gulp-clean-css');
    rename      = require("gulp-rename");
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin');

    /**
     * Css Task
     */
    gulp.task('minify-css', function() {
        return gulp.src('src/css/main.css')
            .pipe(plumber())
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('assets/css'))
            .pipe(browserSync.reload({
                stream: true
            }))
    });

    /**
     * Javascript Task
     */
    gulp.task('minify-js', function(){
        // return gulp.src('src/js/**/*.js')
        return gulp.src('src/js/main.js')
            .pipe(plumber())
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('assets/js/'))
            .pipe(browserSync.reload({
                stream: true
            }))
    });

    /**
     * Imagemin Task
     */
    // gulp.task('imagemin', function() {
    //     return gulp.src('src/img/**/*.{jpg,png,gif}')
    //         .pipe(plumber())
    //         .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    //         .pipe(gulp.dest('assets/img/'))
    //         .pipe(browserSync.reload({
    //             stream: true
    //         }))
    // });

    // Configure the browserSync task
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: ''
            },
        })
    })

    /**
     * Watch stylus files for changes & recompile
     * Watch html files & reload BrowserSync
     */
    gulp.task('watch', function () {
        gulp.watch('src/css/main.css', ['minify-css']);
        gulp.watch('src/js/**/*.js', ['minify-js']);
        // gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
        gulp.watch('*.html');
    });
    
    /**
     * Default task, running just `gulp` will compile the stylus,
     * launch BrowserSync & watch files.
     */
    gulp.task('default', ['minify-js', 'minify-css', /* 'imagemin', */ 'browser-sync', 'watch']);