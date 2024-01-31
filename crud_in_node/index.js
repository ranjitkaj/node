const express = require("express")
const app = express();
port = 3000;
const User = require("./database")

app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))

app.get("/",async(req,res)=>{
    const users = await User.find();
    res.render("index",{
        title:"this is homepage",
        users:users
    })
  
})

app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;
    const newuser = new User({name,email,password});
    const usersave = await newuser.save();
    res.redirect("/");
})

app.get("/register",(req,res)=>{
    res.render("register");
})
