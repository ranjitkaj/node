http = require('http')
fs = require('fs')

Server = http.createServer((req, res)=> {
    res.writeHead(200, {'const-type':'text/html'})
    data =  fs.readFileSync('./index.html','utf8')
    res.end(data)
})

Server.listen(3000, ()=>{console.log('Successfull')})