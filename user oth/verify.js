express = require('express');
otp = require('./index.js');
mailer = require('./mailer.js');
app = express();
port = 3000;


app.listen(port, () => {
    console.log('Server started on port 3000');
})

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    res.render('index');
})

// app.post('/',async (req, res) => {
//     mailer = require('./mailer.js');
//     mailer.genotp();
//     res.send(genotp());
// })

// app.post('/otp', async (req, res) => {
//     userotp = req.body.otp;
//     if (userotp == genotp()) {
//         res.send('verified');
//     } else {
//         res.send('unverified');

//     }
//     })

