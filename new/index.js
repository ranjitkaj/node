http = require('node:http')
fs = require('node:fs')
// Server = http.createServer((req, res)=>{
//     data = {name:'Ranjit', location:'Patna', age:23}
//     res.writeHead(200, {'Content-type':'application/json'})
//     res.end(JSON.stringify(data))
//     html = fs.readFileSync('./index.html','utf8')

//     res.writeHead(200, {'Content-type':'text/html'})
//     res.end(req.url)

// })

Server = http.createServer((req, res)=>{
    index = fs.readFileSync('./index.html','utf8')
    contact = fs.readFileSync('./contact.html','utf8')
    education = fs.readFileSync('./EDUCATION.html','utf8')
    about = fs.readFileSync('./about me.html','utf8')
    
    if(req.url==='/'){res.end(index)}
    if(req.url==='/contact'){res.end(contact)}
    if(req.url==='/education'){res.end(education)}
    if(req.url==='/about'){res.end(about)}

})

Server.listen(3000, ()=>{console.log('Successfull')})