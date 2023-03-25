#!/usr/bin/env node

const path = require('path')
const logEvents = require('./logEvents')
const registerExports = require('./register-exports')
// gulp实例
const gulpInst = require('../lib')
logEvents(gulpInst)

// 获取要执行的任务名称
const taskName = process.argv[2]
// 获取要真正要执行的任务名
const toRun = taskName || 'default'
// 获取gulpfile配置文件
const configPath = path.join(process.cwd(), 'gulpfile.js')
// 获取它的导出对象
const exported = require(configPath)
// 注册导出的任务到gulp实例身上
registerExports(gulpInst, exported)
gulpInst.parallel(toRun)(()=>{
    console.log('well done')
})
gulpInst.series(toRun)(()=>{
    console.log('well done')
})