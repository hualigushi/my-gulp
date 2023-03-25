const {src, dest} = require('gulp-lib')
const gulpPrefixer = require('./gulp-prefixer')
const gulpBabel = require('./gulp-babel')
const defaultTask = (done)=>{
    return src('src/scripts/*.js')
    .pipe(gulpPrefixer('/**prepended**/\n'))
    .pipe(gulpBabel({presets:['@babel/preset-env']}))
    .pipe(dest('dist'))
}

 
exports.default = defaultTask