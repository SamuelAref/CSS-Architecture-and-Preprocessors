const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

//compiles scss to css
function buildStyles() {

    return src('OrganizedProject/**/*.scss') 
    .pipe(sass())
    .pipe(purgecss({content: ['*.html']})) // means look any file that needs css 
    .pipe(dest('css'))
}

//watches any changes and converts
function watchTask() {

    // we added new files we want to look at 
    watch(['OrganizedProject/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask);