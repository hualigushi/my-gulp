const {series, parallel} = require('gulp-lib')

const defaultTask = (done)=>{
    done()
}

const oneTask = (done)=>{
    setTimeout(()=>{
        console.log('one')
        done()
    },1000)
}
const twoTak = (done)=>{
    setTimeout(()=>{
        console.log('two')
        done()
    },1000)
}

const threeTask = (done)=>{
    setTimeout(()=>{
        console.log('three')
        done()
    },1000)
}

const seriesTask = series(oneTask, twoTak, threeTask)
const parallelTask = parallel(oneTask, twoTak,threeTask)
exports.series = seriesTask
exports.parallel = parallelTask
exports.default = defaultTask