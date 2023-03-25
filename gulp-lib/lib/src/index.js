const wrapVinyl = require('./wrap-vinyl')
const readContents = require('./read-contents')
const GlobStream = require('./glob-stream')

function src(glob, opt){
    let gs = new GlobStream(glob,opt)
    return gs
    .pipe(wrapVinyl())
    .pipe(readContents())
}

module.exports = src