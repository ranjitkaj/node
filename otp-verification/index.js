const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the OTP verification system!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const otp = Math.floor(100000 + Math.random() * 900000);


const nodemailer = require('nodemailer');

app.get('/send-otp', (req, res) => {
  // Generate a random OTP
//  const otp = Math.floor(100000 + Math.random() * 900000);

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ranjitkajraitha@gmail.com',
      pass: 'tueq jbzp beha bfmr',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'ranjitkajraitha@gmail.com',
    to: 'kingranjit3899@gmail.com',
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error sending OTP');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('OTP sent successfully');
    }
  });
});

app.get('/verify', (req, res) => {
    res.sendFile(__dirname + '/verify.html');
  });
  
  app.post('/verify-otp', (req, res) => {
    const userOTP = req.body.otp; // Assuming you have body-parser middleware installed
  
    // Compare the user's OTP with the generated OTP
    if (userOTP === otp) {
      res.send('OTP verified successfully');
    } else {
      res.send('Invalid OTP');
    }
  });
  
