a = require('node:path')

console.log(__filename)

console.log(__dirname)

console.log(a.basename(__filename))

console.log(a.basename(__dirname))

console.log(a.extname(__filename))


console.log(a.parse(__filename))


console.log(a.parse(__dirname))


b = 25

const count = b;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdoutconst count = 2;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout