
// express = require('express');
// app = express();
// port = 3000;
// otpgen = require('otp-generator');

// app.listen(port, () => {
//     console.log('Server started on port 3000');
// })


// genotp = (req, res) => {
//     otp = otpgen.generate(6);
//     return otp;
//     //console.log(otp);
// }

     
// app.get('/', (req, res) => {
//     res.send(genotp());
   
// })


//######################





const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const captcha = require('trek-captcha');
const ejs = require('ejs');
path = require('path');
fs = require('fs');3

signup = require('./register.js');
const repo = require('./repository')

const { validateConfirmPassword } = require('./validator')


app.get('/signup', (req, res) => {
  res.send(signup({}));

})


const { validationResult } = require('express-validator');
const { check } = require('express-validator');


app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########   To use Static Files   ##########

app.use(express.static(path.join(__dirname, 'public')));


// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  
  auth: {
    user: 'ranjitkajraitha@gmail.com',
    pass: 'tueq jbzp beha bfmr'
  }
});



// Generate OTP
const generateOTP = () => {
  return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
};

const otp = generateOTP();


// generate Captcha


async function run() {
  const { token, buffer } = await captcha()
  // console.log(token, buffer)
  fs.createWriteStream('./public/a.gif').on('finish', () => console.log(token), generatecaptcha = token).end(buffer)
  
}     

const capt = run()




// Verify OTP on Web Page


app.get('/verify-otp', (req, res) => {
    res.render('verify-otp');
  
});

// app.post('/verify-otp', (req, res) => {
//     const userOTP = req.body.otp;

//     if (userOTP === otp) {
//       res.send('OTP verified successfully');
//     } else {
//       res.send('Invalid OTP');
//     }
//     })

app.post('/verify-otp', function (req, res) {
  if (req.body.otp == otp ) {
      res.send("You has been successfully registered");
  }
  else {
      res.render('incorrect otp');
  }

});



app.get('/register-captcha', (req, res) => {
  res.render('register-captcha');
})




app.post('/signup', function (req, res) {
  data = {
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    city: req.body.city,
    phone: req.body.phone,
    mail: req.body.mail,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    cap: req.body.cap
  
  };
  
  if ( data.cap == generatecaptcha && data.phone.length == 10 && data.password == data.confirmPassword && data.password.length == 8) {
      const mailOptions = {
        from: 'ranjitkajraitha@gmail.com',
        to: data.mail,
        subject: 'OTP Verification',
        text: `Hello ${data.fname} 
        your password is: ${data.password},
        your phone number is: ${data.phone},
        Your OTP is: ${otp}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Failed to send OTP');
        } else {
          console.log('OTP sent:', info.response);
          res.status(200)
          res.render( 'verify-otp');
        }
          //res.send("You has been successfully registered");
          res.render( 'verify-otp');
      });
 }
  else {
      res.render('incorrect captcha');
  }
});


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});







