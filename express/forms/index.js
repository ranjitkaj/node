express = require('express');
path = require('path');
fs = require('fs');

app = express();
port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)

})

app.get('/', (req,res)=>{res.sendFile(path.join(__dirname, 'index.html'))})

app.post('/submit', (req,res)=>{
    details = res.body.fname + " " + req.body.location;
    
})