a = require("node:fs")
// b = a.readFileSync("./c.txt",'utf-8')
// console.log(b)

a.readFile("./c.txt", 'utf-8', (error, data) =>{

    if(error){console.log(error)}
    else{console.log(data)}

})

    