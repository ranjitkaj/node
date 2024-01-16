http = require('node:http')
fs = require('node:fs')
Server = http.createServer((req, res)=>{
    // data = {name:'Ranjit', location:'Patna', age:23}
    // res.writeHead(200, {'Content-type':'application/json'})
    // res.end(JSON.stringify(data))


    html = fs.readFileSync('./index.html','utf8')

    res.writeHead(200, {'Content-type':'text/html'})
    res.end(html)

})

Server.listen(3000, ()=>{console.log('Successfull')})