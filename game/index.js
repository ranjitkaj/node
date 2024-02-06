const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { existsSync } = require('fs');
path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));

// Database
const users = [];

// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.send('Please login to continue.');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('Invalid username or password.');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user.username}! This is your dashboard.`);
  } else {
    res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
