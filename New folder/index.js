express = require("express");
app = express();
port = 3000;

app.use(express.json())
app.use(express.urlencoded())

app.listen(port, ()=>{console.log(`Server listen on ${port}`)})

book = [
    {
        name: "Data Science",
        con: 200
    },
    {
        name: "web devlopment",
        con: 80
    },
    {
        name: "python",
        con: 55
    }
]

app.get("/", (req,res)=>{
    res.send(book)
})

app.post("/", (req,res)=>{
    console.log(req.body);
    book.push(req.body);
    res.send(201)
    res.send(book)
})