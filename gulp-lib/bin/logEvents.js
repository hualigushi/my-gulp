function logEvents(gulpInst){
    gulpInst.on('start',(evt)=>{
        console.log(`Starting '${evt.name}' ...`)
    })
    gulpInst.on('stop',(evt)=>{
        console.log(`Finish '${evt.name}' after ${evt.duration[0]}ms...`)
    })
}
module.exports = logEvents