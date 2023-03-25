const File = require('vinyl')
const through =require('through2')
const fs = require('fs')

function readContents(){
    function readFile(file, encoding, next){
        fs.readFile(file.path, 'binary', (err, data)=>{
            file.contents = Buffer.from(data)
            next(null, new File(file))

        })
    }

    return through.obj(readFile)
}

module.exports = readContents