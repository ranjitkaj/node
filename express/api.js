express = require('express');

app = express();
port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port `)

})
app.get('/', (req,res)=>{res.send('<html lang="en"><body><h1>This is nsti.</h1></body></html>')})

app.post('/submit-data', (req,res)=>{res.send('<html lang="en"><body><h1>I am Ranjit.</h1></body></html>')})

app.put('/update-data', (req,res)=>{res.send('<html lang="en"><body><h1>Data Updated successfully</h1></body></html>')})

app.delete('/delete-data', (req,res)=>{res.send('<html lang="en"><body><h1>Data Deleted successfully.</h1></body></html>')})