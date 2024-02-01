express = require('express');
app = express();
port = 3000;
app.set('view engine', 'ejs')

data = {
    name: 'ranjit',
    age: 21,
    class: '10th',
    marks: 90,
    admin: true,
    subjects: ['physics', 'maths', 'chemistry'],
    
}

app.get('/', (req, res) => {
    res.render('./pages/index.ejs', {data: data})
})

app.get('/about', (req, res) => {
    res.render('./pages/about.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
