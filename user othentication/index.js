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

app.post('/register', async (req, res) => {
    data = {
        username: req.body.username,
        password: req.body.password
    }

    const hasedpass = await password.bcrypt.genSalt(11);
    newstudent = await student({
        username: data.username,
        password: hasedpass
    })  
    newstudent.save()  
    res.redirect('/')

})

app.get('/home', async (req, res) => {
    res.render('home')
})

app.get('/login', async (req, res) => {
    res.render('login')
})


app.post('/login', async (req, res) => {
    username = req.body.username;
    password = req.body.password;

    login = await student.findOne({ username: username });

    if (login) {
        const isMatch = await unhasedpass == bcrypt.compare(password, login.password);
        if (isMatch) {
            res.redirect('/home')
        } else {
            res.redirect('invalid password')
            res.redirect('/login')
    
        }
    }
    
})
// const hasedpass = await bcrypt.genSalt(11);




