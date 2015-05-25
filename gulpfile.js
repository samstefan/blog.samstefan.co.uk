var gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , uglify = require('gulp-uglify')
  , nib = require('nib')

  , filePaths =
    { stylus: ['./assets/stylus/main.styl']
    , javascript: ['./assets/js/main.js']
    }

  // Stylus options
  , stylusOptions =
    { compress: true
    , use: nib()
    }

gulp.task('stylus', function () {
  gulp.src(filePaths.stylus)
    .pipe(stylus(stylusOptions))
    .pipe(gulp.dest('./assets/'))
})

gulp.task('javascript', function () {
  gulp.src(filePaths.javascript)
    .pipe(uglify())
    .pipe(gulp.dest('./assets/'))
})

gulp.task('watch', function() {
  gulp.watch('./assets/stylus/**/*', ['stylus'])
  gulp.watch('./assets/js/**/*', ['javascript'])
})

gulp.task('default', ['watch', 'stylus', 'javascript'])
gulp.task('build', ['stylus', 'javascript'])
