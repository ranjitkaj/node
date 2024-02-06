
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
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
path = require('path');

const app = express();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
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

// Send OTP via Email
app.get('/send-otp', (req, res) => {
  const email = req.query.email;
  //const otp = generateOTP();
  console.log(otp)

  const mailOptions = {
    from: 'ranjitkajraitha@gmail.com',
    to: 'kingranjit3899@gmail.com',
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send OTP');
    } else {
      console.log('OTP sent:', info.response);
      res.status(200).send('OTP sent successfully');
    }
  });
});

// Verify OTP on Web Page

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

app.post('/verify-otp', (req, res) => {
  const userOTP = req.body.otp;

  if (userOTP === otp) {
    res.send('OTP verified successfully');
  } else {
    res.send('Invalid OTP');

  }
  }
)

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});





