const File = require('vinyl')
const through =require('through2')
const fs = require('fs-extra')
const path = require('path')
function writeContents(outFolder){
    function writeFile(file, encoding, next){
        let outputPath = path.resolve(file.cwd, outFolder)
        let writePath = path.resolve(outputPath, file.relative)
        file.path = writePath
        fs.ensureDir(path.dirname(writePath), (err)=>{
            fs.writeFile(file.path, file.contents, encoding, next)
        })
    }

    return through.obj(writeFile)
}

module.exports = writeContents