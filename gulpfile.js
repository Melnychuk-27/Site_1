const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
var fileinclude = require('gulp-file-include');
// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on("change", browserSync.reload);
});


gulp.task('fileinclude', function() {
  gulp.src(['src/html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./src')); //выгружаем файл
});


gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
            prefix: ""
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
})

gulp.task('watch', function(){
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles")).on("change", browserSync.reload);
    gulp.watch("src/html/*.html").on("change", gulp.parallel('fileinclude')).on("change", browserSync.reload);
    gulp.watch("src/js/*.js").on("change", gulp.parallel('scripts')).on("change", browserSync.reload);
    gulp.watch("src/*.html").on("change", gulp.parallel('html'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
    .pipe(gulp.dest('dist/icons'));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});


gulp.task('default', gulp.parallel("fileinclude",'watch','server','styles','scripts','fonts','icons','images','html'));

