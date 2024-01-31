const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud_in_node").then(()=>{
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

createmp = new Usermodel({
    name: "Sujeet kumar",
    email: "sujeetkumar@123",
    password: "sujeet123",
    mobile: 5689231456,
    address: "Kahalgon",
    salary: 15000
}).save().then(()=>{
    console.log("saved");

})