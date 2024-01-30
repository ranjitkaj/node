express = require("express");
items = require("./route/item.js")
app = express();
port = 3000;

app.use(express.json())
app.use(express.urlencoded())

app.use('/', items)

app = listen(port, () => {
    console.log(`Started app listen on ${port}`);
})
