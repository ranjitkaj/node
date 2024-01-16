http = require('node:http')
Server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end('<h1>This is Body.</h1>')

})

Server.listen(3000, ()=>{console.log('Successfull')})