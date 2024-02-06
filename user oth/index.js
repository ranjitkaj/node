
express = require('express');
app = express();
port = 3000;
otpgen = require('otp-generator');

app.listen(port, () => {
    console.log('Server started on port 3000');
})


genotp = (req, res) => {
    otp = otpgen.generate(6);
    return otp;
    //console.log(otp);
}


app.get('/', (req, res) => {
    res.send(genotp());
   
})







