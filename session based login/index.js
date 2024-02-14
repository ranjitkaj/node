const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./user');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;

    } else {
        
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ error: 'Invalid username or password' });
        return;

      } else {
          
        req.session.userId = user._id;
        res.json({ message: 'Login successful' });
      }
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to log in' });
    }});


app.get('/', (req, res) => {
  res.render('/register')
});



app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logout successful' });
})



app.get('/login', (req, res) => {
    
  if (!req.session.userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;

  } else { 
  const userId = req.session.userId;
  try {
    const user = User.findById(userId);
    if (!user) {
        
      res.status(401).json({ error: 'Unauthorized' });
      return;

    } else {
        
     const username = user.username;

        res.json({ message: `Welcome, ${username}!` });

    }

    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user' });

    }
}
  });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       res.status(401).json({ error: 'Invalid username or password' });
//       return;
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       res.status(401).json({ error: 'Invalid username or password' });
//       return;
//     }

//     req.session.userId = user._id;
//     res.json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to login' });
//   }
// });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
