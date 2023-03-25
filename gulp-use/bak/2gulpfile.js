const {src, dest} = require('gulp-lib')

const defaultTask = (done)=>{
    return src('src/scripts/*.js').pipe(dest('dist'))
}

 
exports.default = defaultTask