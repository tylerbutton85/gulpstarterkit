## Synopsis

Basic Gulp starter toolkit designed to streamline front end development according to industry best practices.

Includes Bourbon-Neat grid system for pixel perfect layouts without complex classes and messy markup found with gridsystems such as bootstrap.

Modled closely on [Zell Liew's CSS tricks article](https://css-tricks.com/gulp-for-beginners/).

## Features 

Tookit includes the follwing features;

* [Browsersync](https://www.browsersync.io/)

* [SCSS precompilation](https://www.npmjs.com/package/gulp-sass)

* [CSS / JS minifcation](https://www.npmjs.com/package/gulp-uglify)

* [Image optimisation](https://www.npmjs.com/package/gulp-imagemin)

* [Bourbon & Neet gridsystem](http://neat.bourbon.io/)

* [CSS Linting](https://www.npmjs.com/package/gulp-sass-lint)

* [JS Hint](https://www.npmjs.com/package/jshint-stylish)

## Usage

View live changes on your local host at http://localhost:3000 
Compiled and packaged files will be saved to **'dist'** for public hosting. 

* Watch - View files as you edit them
* Build - Compile assets
* Dubug - Find issues and check validity 

**commands**

    gulp watch /* Runs browser sync in new localhost browser. */
    gulp build /* Minifies files and outputs SCSS to distribution folder. */
    gulp debug /* Runs SCSS linter and JSHint. */
 