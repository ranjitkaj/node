
eventsemitter = require('node:events')

emitter = new eventsemitter()

emitter.on('order-cake', (type, flavour, size)=> {
    console.log('order recived!! baking ' )
})