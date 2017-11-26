const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      clean = require('gulp-clean'),
      usemin = require('gulp-usemin'),
      cssmin = require('gulp-cssmin'),
      uglify = require('gulp-uglify'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync');

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
})

gulp.task('build-img', () => {
    return gulp.src('./src/assets/img/**/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
})

gulp.task('usemin', ['clean'], () => {
    return gulp.src('src/**/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist'))
})

// Servidor rodando com projeto de desenvolvimento
gulp.task('dev-server', () => {
    browserSync.init({
        server: {
            baseDir: './src/'
        }
    })

    gulp.watch('src/**/*').on('change', browserSync.reload)
})

// Servidor rodando com projeto em produção (Com todo o build feito)
gulp.task('prod-server', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
})

// Tarefa principal (Executada para produção)
gulp.task('default', ['usemin', 'build-img'], () => {
    gulp.start('prod-server')
})
