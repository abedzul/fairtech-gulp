const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

gulp.task("copyHtml", async function () {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("images", () =>
  gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest("dist/img"))
);

gulp.task("scripts", async function () {
  gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("styles", async function () {
  gulp
    .src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

gulp.task(
  "default",
  gulp.parallel(["copyHtml", "images", "styles", "scripts"])
);

gulp.task("watch", async function () {
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch("src/img/*", gulp.series("images"));
  gulp.watch("src/sass/*.scss", gulp.series("styles"));
  gulp.watch("src/*.html", gulp.series("copyHtml"));
});
