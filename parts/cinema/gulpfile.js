'use strict';
var gulp          = require('gulp');
var jade          = require('gulp-jade');
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var ngAnnotate    = require('gulp-ng-annotate');
var minifyHTML    = require('gulp-minify-html');
var sourcemaps    = require('gulp-sourcemaps');
var imagemin      = require('gulp-imagemin');
var webserver     = require('gulp-webserver');
var path          = require('path');
var bowerFiles    = require('gulp-main-bower-files');
var ngConstant    = require('gulp-ng-constant');
var es            = require('event-stream');
var gulpFilter    = require('gulp-filter');
var minifyCss     = require('gulp-minify-css');
var gulp_inject   = require('gulp-inject');
var mainBowerFiles= require('main-bower-files');
var jshint        = require('gulp-jshint');
var sass          = require('gulp-sass');
var cleanCss      = require('gulp-clean-css');
var rename        = require('gulp-rename');
var del           = require('del');
var gulpIf        = require('gulp-if');
var argv          = require('yargs').argv;
var gulpUncache   = require('gulp-uncache');
var debug         = require('gulp-debug');
// var angularProtractor = require('gulp-angular-protractor');

argv.env = argv.env ? argv.env : 'local';

var paths = {index: './src/app/index.jade',
  jade: './src/app/**/*.jade',
  html: './public/view/',
  images_src: './src/img/**',
  images_pub: './public/img/',
  js_src: './src/app/**/*.js',
  js_pub: './public/js/',
  scss: './src/scss/styles.scss',
  css_src: './src/css/assets/**/*.css',
  css_pub: './public/css/',
  sass: './src/css/scss/*.scss',
  vendor_css_src: './src/css/vendor/**/*.css',
  vendor_css_pub: './public/css/vendor/',
  fonts: './public/fonts/',
  assets: './public/assets/',
  vendor_js: './src/vendor/**/*.js',
  i18n_src: './src/i18n/*.json',
  i18n_pub: './public/i18n/',
  config: './src/config/' + argv.env + '.json',
  assist_src: './src/assist/**/**',
  assist_pub: './public/assist/',
  json_pub: './public/json-data/',
  php: './src/php/*.*'
};

gulp.task('styles', gulp.parallel(sassStyles, vendorCss, sassBootstrap, publishCss));
// gulp.task('js', gulp.series(bowerJs, publishJs));
gulp.task('jade', gulp.series(buildIndexFile_Pub, uncache, minifyIndexFile, publishJade));
gulp.task('jade_local', gulp.series(buildIndexFile_Dev, minifyIndexFile, publishJade));
gulp.task('build_export', gulp.series(clean, 'styles', bowerCss, bowerJs, publishJs, 'jade', copyPHP, gulp.parallel(fonts, images, jsonData)));
gulp.task('build_local', gulp.series(clean, 'styles', bower, publishJs, 'jade_local', copyPHP, gulp.parallel(fonts, images, jsonData)));
gulp.task('export_version_test', gulp.series('build_export', serve));
gulp.task('watch', gulp.series('build_local', serve, watch));

gulp.task('serve', serve);

function watch() {
  gulp.watch('./src/img/**', images);
  gulp.watch('./src/**/*.jade', gulp.series('jade_local'));
  gulp.watch('./bower_components/**', gulp.series('jade_local'));
  gulp.watch(paths.js_src, publishJs);
  gulp.watch(paths.js_src, publishJs);
  gulp.watch(paths.vendor_js, publishJs);
  gulp.watch('./src/scss/**', sassStyles);
  gulp.watch('./src/css/**/*.css', publishCss);
  gulp.watch('./src/css/**/*.scss', gulp.series(sassBootstrap));
  gulp.watch('./src/fonts/**', fonts);
}

// gulp.task('e2e_test', function(callback) {
//   gulp
//     .src(['./src/test/e2e/*.spec.js'])
//       .pipe(angularProtractor({
//         'configFile': 'src/test/e2e/conf.js',
//         'debug': false,
//         'autoStartStopServer': true
//       }))
//       .on('error', function(e) {
//         console.log(e);
//       })
//       .on('end', callback);
//
// });

function serve() {
  return gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html',
      port:8001,
      https: false
    }));
}

function clean() {
  return del('./public');
}

function sassBootstrap() {
  return gulp.src('./src/scss/bootstrap/bootstrap.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpIf(argv.env === 'prod', cleanCss()))
    .pipe(rename('bootstrap.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css_pub));
}

function vendorCss() {
  return gulp.src(paths.vendor_css_src)
    .pipe(concat('vendor.min.css'))
    .pipe(gulpIf(argv.env === 'prod', cleanCss()))
    .pipe(gulp.dest(paths.css_pub));
}

function publishCss() {
  return gulp.src(paths.css_src)
    .pipe(debug({title:'publishCss'}))
    .pipe(gulp.dest(paths.css_pub));
}

function uncache() {
  return gulp.src('./public/index.html')
    .pipe(gulpUncache({
      rename: true,
      append: 'hash',
      srcDir: './public',
      distDir: './public'}))
    .pipe(gulp.dest('./public/'));
}

function minifyIndexFile() {
  return gulp.src('./public/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./public/'));
}

function buildIndexFile_Pub() {
  return gulp.src(paths.index)
    .pipe(jade({pretty: true}))
    .pipe(gulp_inject(gulp.src([paths.assets + '*.js', paths.assets + '*.css'], {read: false}), {
      name: 'bower',
      transform: function(filepath) {
        var tmp, filename;
        if (filepath.slice(-3) === '.js') {
          tmp = filepath.split('/');
          filename = tmp[tmp.length - 1];
          return '<script src="/assets/'+ filename + '"></script>';
        } else if (filepath.slice(-4) === '.css') {
          tmp = filepath.split('/');
          filename = tmp[tmp.length - 1];
          return '<link rel="stylesheet" href="/assets/'+ filename + '">';
        }

        // Use the default transform as fallback:
        return gulp_inject.transform.apply(gulp_inject.transform, arguments);
      }
    }))
    .pipe(gulp.dest('./public/'));
}

function buildIndexFile_Dev() {
  return gulp.src(paths.index)
    .pipe(jade({pretty: true}))
    .pipe(gulp_inject(gulp.src(mainBowerFiles(), {read: false}), {
      name: 'bower',
      transform: function(filepath) {
        if (filepath.slice(-3) === '.js') {
          return '<script src="/assets/'+ filepath.replace('/bower_components/', '') + '"></script>';
        }
        if (filepath.slice(-4) === '.css') {
          return '<link rel="stylesheet" href="/assets/'+ filepath.replace('/bower_components/', '') + '">';
        }

        // Use the default transform as fallback:
        return gulp_inject.transform.apply(gulp_inject.transform, arguments);
      }
    }))
  .pipe(gulp.dest('./public/'));
}

function publishJade() {
  return gulp.src(paths.jade)
    .pipe(gulpIf(argv.env === 'local', debug({title:'publishJade'})))
    .pipe(jade({pretty: true}))
    .pipe(minifyHTML())
    .pipe(gulp.dest(paths.html));
}

function bower() {
  return gulp.src('./bower.json')
    .pipe(bowerFiles())
    .pipe(gulp.dest(paths.assets));
}

function images() {
  return gulp.src(paths.images_src)
    .pipe(imagemin(
    //   [
    //   imagemin.gifsicle({interlaced: true}),
    //   imagemin.jpegtran({progressive: true}),
    //   imagemin.optipng({optimizationLevel: 3}),
    //   imagemin.svgo({plugins: [{removeViewBox: true}]})
    // ]
  ))
    .pipe(gulp.dest(paths.images_pub));
}

function copyPHP() {
  return gulp.src(paths.php)
    .pipe(gulp.dest('./public/'));
}

function publishJs() {
  var config = gulp.src(paths.config)
    .pipe(ngConstant({name: 'app.config'}));

  var vendorJs = gulp.src(paths.vendor_js);

  var scripts = gulp.src(paths.js_src);

  if (argv.env !== 'prod') {
    scripts
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));}

  return es.merge(config, scripts, vendorJs)
    .pipe(debug({title:'js'}))
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(gulpIf(argv.env === 'prod', uglify()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.js_pub));
}

function bowerJs() {
  var filterJS = gulpFilter('**/*.js');
  return gulp.src('./bower.json')
    .pipe(bowerFiles())
    .pipe(filterJS)
    .pipe(concat('bower.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(paths.assets));
}

function bowerCss() {
  var filterCSS = gulpFilter('**/*.css');
  return gulp.src('./bower.json')
    .pipe(bowerFiles())
    .pipe(filterCSS)
    .pipe(concat('bower.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.assets));
}

function fonts() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest(paths.fonts));
}

function sassStyles() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpIf(argv.env === 'prod', cleanCss()))
    .pipe(rename('styles.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css_pub));
}

function jsonData() {
  return gulp.src('./src/json-data/**/*.json')
    .pipe(gulp.dest(paths.json_pub));
}
