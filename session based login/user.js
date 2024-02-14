// const mongoose = require('mongoose');

// const bcrypt = require('bcrypt');

// const saltRounds = 10;

// const User = mongoose.model('User');

// module.exports.register = async (username, password) => {
    
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const user = new User({
//         username,
//         password: hashedPassword
//     });

//     await user.save();

//     return user;
// }

// module.exports.login = async (username, password) => {
//     const user = await User.findOne({ username });

//     if (!user) {
        
//         throw new Error('User not found');

//     } else {
        
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
            
//             throw new Error('Incorrect password');

//         } else {
            
//             return user;



//         }
//         }
//     }
   

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
    name: 'Sujeet kumar',
    email: "sujeetkumar@123",
    password: "sujeet123",
    mobile: 5689231456,
    address: "Kahalgon",
    salary: 15000
}).save().then(()=>{
    console.log("saved");
});





