'use strict';
const  gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    svgmin = require('gulp-svgmin'),
    webp = require('gulp-webp'),
    useref = require('gulp-useref'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    /** Paths of application directories */
    dir = {
        src: 'src',
        public: 'public'

    },
    /**
     *
     * @files
     */
    files ={
        /**
         * Go all css files
         */
        CSS:[
            `${dir.public}/css/styles.css`
        ],
        /**
         * Go all js files
         */
        JS:[
           `${dir.public}/js/app.js`
        ]
    },
    opts ={
        pug:{
            pretty : true,
            locals : {
                title: 'Ebp-grid',
                files : files
            }
        },
        sass:{ outputStyle: 'compressed'},
        es6: {presets: ['es2015']}
    };

    /**
    *Develop gulp to build pug to html
    */

    gulp.task('pug', ()=> {
        gulp
            .src(`${dir.src}/pug/*.pug`)
            .pipe(pug(opts.pug))
            .pipe(gulp.dest(dir.public));
    });
    /**
    *Develop gulp to build sass to css
    */

    gulp.task('sass', ()=> {
        gulp
            .src(`${dir.src}/scss/*.scss`)
            .pipe(sass(opts.sas))
            .pipe(gulp.dest(`${dir.public}/css`));
    });

gulp.task('es6', ()=> {
    gulp
        .src(`${dir.src}/es6/*.js`)
        .pipe(babel(opts.es6))
        .pipe(gulp.dest(`${dir.public}/js`));
});