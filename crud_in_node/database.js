const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud_in_node").then(()=>{
    console.log("database connected");
}).catch((e) => {
    console.log(e);
})
const Schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const Usermodel = mongoose.model("User" , Schema);
module.exports = Usermodel;