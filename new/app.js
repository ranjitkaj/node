// a = require("node:fs")

const { error } = require("node:console")

// console.log('ushboo')
// console.log('This  Patna')

//  b = a.readFileSync("./d.txt",'utf-8')
//  console.log(b)
// console.log('Rkhushboo')
// console.log('This is NSTI Patna')

// a.readFile("./c.txt", 'utf-8', (error, data) =>{

//     if(error){
    // console.log(error)
    // }
    // else{
    // console.log(data)
    // }

// })

// console.log('mukesh')
// console.log('Patna')

// a.writeFileSync('./e.txt', 'This is Patna.')


fs = require("node:fs")

fs.writeFile('./f.txt', 'I am Ranjit from NSTI Allahabad.', {flag: "a"}, (error) =>{
    if(error){
        console.log(error)
    }
    else{
        console.log('Successfully Created.')
    }
})






