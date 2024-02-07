// const express = require('express');
// const app = express();
// const path = require('path');
// const port = 3000;

// app.set('view engine', 'ejs')
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Welcome to the OTP verification system!');
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const otp = Math.floor(100000 + Math.random() * 900000);


// const nodemailer = require('nodemailer');

// app.get('/send-otp', (req, res) => {
//   // Generate a random OTP
// //  const otp = Math.floor(100000 + Math.random() * 900000);

//   // Create a transporter object
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'ranjitkajraitha@gmail.com',
//       pass: 'tueq jbzp beha bfmr',
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'ranjitkajraitha@gmail.com',
//     to: 'kingranjit3899@gmail.com',
//     subject: 'OTP Verification',
//     text: `Your OTP is: ${otp}`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send('Error sending OTP');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('OTP sent successfully');
//     }
//   });
// });

// app.get('/verify', (req, res) => {
//     res.sendFile(__dirname + '/verify.html');
//   });
  
//   app.post('/verify-otp', (req, res) => {
//     const userOTP = req.body.otp; // Assuming you have body-parser middleware installed
  
//     // Compare the user's OTP with the generated OTP
//     if (userOTP === otp) {
//       res.send('OTP verified successfully');
//     } else {
//       res.send('Invalid OTP');
//     }
//   });
  


//########################
const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express();

//View Engine
app.engine('handlebars', exphbs({ extname: "hbs", defaultLayout: false, layoutsDir: "views/ " }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('contact');
});

var email;

var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: 'Your E-Mail',
        pass: 'Your Password',
    }

});

app.post('/send', function (req, res) {
    email = req.body.email;

    // send mail with defined transport object
    var mailOptions = {
        to: req.body.email,
        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('otp');
    });
});

app.post('/verify', function (req, res) {

    if (req.body.otp == otp) {
        res.send("You has been successfully registered");
    }
    else {
        res.render('otp', { msg: 'otp is incorrect' });
    }
});

app.post('/resend', function (req, res) {
    var mailOptions = {
        to: email,
        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp', { msg: "otp has been sent" });
    });

});

//defining port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
})