eventName = require('node:events')

emitter = new eventName()

emitter.on('module', ()=> {
    console.log('hii')
})

emitter.emit('module')