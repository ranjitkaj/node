const express = require("express");
const app = express();
port = 3000;

app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})

app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ranjit:Ranjit1234@cluster0.szk3lvs.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("database connected");
}).catch((e) => {
    console.log(e);
})
const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    date:{type: Date, default: Date.now},
    mobile:{type: Number},
    address:{type: String},
    salary:{type: Number}

})
const Usermodel = mongoose.model("User" , Schema);
module.exports = Usermodel;

// createmp = new Usermodel({
//     name: "Sujeet kumar",
//     email: "sujeetkumar@123",
//     password: "sujeet123",
//     mobile: 5689231456,
//     address: "Kahalgon",
//     salary: 15000
// }).save().then(()=>{
//     console.log("saved");

// })


app.get("/",(req,res)=>{
    res.render("register");
})

app.post("/",async(req,res)=>{
    const {name, mobile,address,salary, date, email,password}=req.body;
    const newuser = new Usermodel({name, mobile,address,salary, date, email,password});
    const usersave = await newuser.save();
    console.log(`usersave ${usersave}`);
    res.redirect("/");

})
