nodemailer = require('nodemailer');
otp = require('./index.js');


    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ranjitkajraitha@gmail.com',
            pass: 'tueq jbzp beha bfmr'
        }
    });
    let mailOptions = {
        from: 'ranjitkajraitha@gmail.com',
        to: 'kingranjit3899@gmail.com',
        subject: 'otp',
        text: `your otp is ${genotp()}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    