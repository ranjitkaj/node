const express = require("express")
const app = express();
port = 3000;
//const User = require("./database")

app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})


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

// ########   created in sync way   #######

// createmp = new Usermodel({
//     name: "Mukesh kumar",
//     email: "mk5956@123",
//     password: "mk59123",
//     mobile: 5345631456,
//     address: "Saharsha",
//     salary: 15000
// }).save().then(()=>{
//     console.log("saved");

// })


// ###### created in async way #########

// createemp = async() => {
//     try {
//         const createemp = new Usermodel({
//             name: "Sanjit kumar",
//             email: "sk5956@123",
//             password: "sanjeet9123",
//             mobile: 5345631456,
//             address: "Gaya",
//             salary: 20000
//         })
//         const emd = await createemp.save();
//         console.log(emd)
//     } catch (error) {
//         console.log(error)
//     }
//     }
//     createemp();



// ##########  Read data from database  ##########


// readData = async()=>{
//     try {
//         const data = await Usermodel.find();
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// readData();


// ##########  Read data from database with condition   ##########

// readData = async()=>{
//     try {
//         const data = await Usermodel.find( {salary:{$gt:15000}}).select({name:2, email:1}).limit(15);
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// readData();

// ##########  Read data from database with condition $and oprater  ##########

// readData = async()=>{
//     try {
//         const data = await Usermodel.find( { $and:[{name:"Sujeet kumar"},{salary:{$gt:14000}}]});
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// readData();



// updateData = async(name)=>{
//     try {
//         const data = await Usermodel.updateOne({name:name});
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// updateData("ranjit kumar");





app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))

// app.get("/",async(req,res)=>{
//     const users = await User.findone( {name:"Sujeet kumar"});
//     res.render("index.ejs",{
//         title:"this is homepage",
//         users:users
//     })
  
// })

app.post("/register",async(req,res)=>{
    const {name, mobile,address,salary, date, email,password}=req.body;
    const newuser = new User({name, mobile,address,salary, date, email,password});
    const usersave = await newuser.save();
    res.redirect("/");
})

app.get("/register",(req,res)=>{
    res.render("register");
})
