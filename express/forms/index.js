express = require('express');
path = require('path');
fs = require('fs');
bodyParser = require('body-parser');
app = express();


port = 3000;


app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)

})

app.get('/', (req,res)=>{res.sendFile(path.join(__dirname, 'index.html'))})

app.post('/submit', (req,res)=>{
    details = req.body.fname + " " + req.body.location;
    fs.writeFile('details.txt', details, (err)=>{
        if(err) {
            console.log(err)
        }
        else{
            console.log('file created')
        }
    })
    res.send('Thanqu')
})