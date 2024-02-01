const mongoose= require("mongoose");


mongoose.connect("mongodb://localhost:27017/new",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})


Schema = mongoose.Schema({
    fname:String,
    dob:Date,
    city:String,
    phone:Number,
    mail:String,
    password:String
    })

studentModel = mongoose.model("student",Schema);
module.exports = studentModel