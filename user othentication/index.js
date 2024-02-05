const { existsSync } = require('fs');

express = require('express')
app = express();
path = require('path');
bcrypt = require('bcrypt');
student = require('./database');
port = 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.render('login')
})

app.get('/register', async (req, res) => {
    res.render('register')
})

app.get('/home', async (req, res) => {
    res.render('home')
})



app.post('/register', async (req, res) => {
    data = {
        username: req.body.username,
        password: req.body.password
    }

    exists = await student.findOne({ username: data.username });
    if(exists){
        res.send('user already exists')  
    }
    else{

    const hasedpass = await bcrypt.hash(data.password, 11);
    newstudent = await student({
        username: data.username,
        password: hasedpass
    })  
    newstudent.save()  
    res.redirect('/')}


})

app.post('/', async (req, res) => {
    data = {
        
        username: req.body.username,
        password: req.body.password

    }
    checkuser = await student.findOne({ username: data.username });
    if (checkuser) {
        const checkpass = await bcrypt.compare(data.password, checkuser.password);
        if (checkpass) {
            res.redirect('/home')
        } else {
            res.send('invalid password')
        }
        }
    else{
        res.send('user not found')
    }
    })

