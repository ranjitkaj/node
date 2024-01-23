eventName = require('node:events')

emitter = new eventName()

emitter.on('module', (name, type, number)=> {
    console.log('hii')
})

emitter.emit('module')