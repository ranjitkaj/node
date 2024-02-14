const { check } = require("express-validator");


check



validateConfirmPassword = check("confirmPassword").trim().isLength({ min: 8, max: 16 }).withMessage("Password must be between 8 to 16 characters").custom((value, { req }) => {

    if (value !== req.body.password) { 
        throw new Error("Password confirmation does not match password")
    }
    else if (value == req.body.email || value == req.body.phoneNumber){
        throw new Error("Password cannot be same as email or phone number")}
    else if (value == req.body.username){
        throw new Error("Password cannot be same as username")}
    else if (value == req.body.name){
        throw new Error("Password cannot be same as name") 
    }
        return true
    })