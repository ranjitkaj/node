const mongoose= require("mongoose");


mongoose.connect("mongodb://localhost:27017/user",{
     useNewUrlParser:true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})


Schema = mongoose.Schema({
    username:String,
    password:String
    })

studentModel = mongoose.model("student",Schema);
module.exports = studentModel