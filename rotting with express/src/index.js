express = require("express");
app = express();
port = 3000;



app.listen(port, () =>{console.log('Server actively running on port ${port}')});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

accesories = [
    {
        "name": "laptop",
        "price": 50
    },
    {
        "name": "Dextop",
        "price": 50

    },
    {
        "name": "led tv",
        "price": 80
    }
]

app.get("/", (req,res)=>{
    res.send(accesories);
})