var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var csscomb = require("gulp-csscomb");
var plumber = require("gulp-plumber");
var browser = require("browser-sync");

gulp.task("sass-compile", function() {
  return gulp.src("./src/scss/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

//gulp.task("default", ["sass-compile"]);

gulp.task("browser-sync", function() {
  browser({
    server: {
      baseDir: "./public/",
      index: "index.html"
    }
  });
});

gulp.task("bs-reload", function() {
  browser.reload();
});

gulp.task("default", ["browser-sync"], function() {
  gulp.watch("./src/scss/*.scss", ["sass-compile"]);
  gulp.watch("./public/*.html", ["bs-reload"]);
  gulp.watch("./public/js/*.js", ["bs-reload"]);
  gulp.watch("./public/css/*.css", ["bs-reload"]);
});