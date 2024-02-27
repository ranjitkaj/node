const express = require("express");
app = express();
port =  process.env.PORT || 3000;
const mongoose = require("mongoose");


    connect =    mongoose.connect("mongodb+srv://ranjit:Ranjit1234@cluster0.szk3lvs.mongodb.net/?retryWrites=true&w=majority").then(()=>{
            console.log("database connected");
        }).catch((e) => {
            console.log(e);
    })

    const Schema = new mongoose.Schema({
        name:String,
        email:String,
        date:{type: Date, default: Date.now}
    })
    const Usermodel = mongoose.model("User" , Schema);


app.get("/", function (req, res) {
    res.send("Get request received");
});


app.post("/", function (req, res) {
    res.send(connect);
    const {name,email}=req.body;
    const newuser = new Usermodel({name, email});
    const usersave = newuser.save();
    console.log('successful')
    res.send(usersave);
    })


app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});