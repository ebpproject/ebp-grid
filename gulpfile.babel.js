'use strict';
import gulp from 'gulp';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import babel from 'gulp-babel';

/** Paths of application directories */
const dir = {
        src: 'src',
        public: 'public'

    },
    /**
     *
     * @files
     */
    files = {
        /**
         * Go all css files
         */
        CSS: [
            `${dir.public}/css/reset.css`,
            `${dir.public}/css/grid.css`,
            `${dir.public}/css/layout.css`,
            `${dir.public}/css/styles.css`
        ],
        /**
         * Go all js files
         */
        JS: [
            `${dir.public}/js/app.js`
        ]
    },
    opts = {
        pug: {
            pretty: true,
            locals: {
                title: 'Ebp-grid',
                files: files
            }
        },
        sass: { outputStyle: 'compressed' },
        es6: { presets: ['es2015'] }
    };

/**
 *Develop gulp to build pug to html
 */

gulp.task('pug', () => {
    gulp
        .src(`${dir.src}/pug/*.pug`)
        .pipe(pug(opts.pug))
        .pipe(gulp.dest(dir.public));
});
/**
 *Develop gulp to build sass to css
 */

gulp.task('sass', () => {
    gulp
        .src(`${dir.src}/scss/*.scss`)
        .pipe(sass(opts.sas))
        .pipe(gulp.dest(`${dir.public}/css`));
});

gulp.task('es6', () => {
    gulp
        .src(`${dir.src}/es6/*.js`)
        .pipe(babel(opts.es6))
        .pipe(gulp.dest(`${dir.public}/js`));
});