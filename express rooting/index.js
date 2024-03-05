const { urlencoded } = require('express');

express = require('express');
app = express();
port = process.env.PORT || 3000;

// view = require('ejs');



// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());





app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/create', (req, res) => {
    res.send('Hello World!');
})

app.get('/update', (req, res) => {
    res.send('Hello  World!');
})

app.post('/', (req, res) => {
    res.send('Hello  hhj World!');
})


























app.listen(port, () => console.log(`Example app listening on port ${port}!`));