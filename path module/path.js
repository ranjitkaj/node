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

console.log('count:', count);

console.log('count: %d', count);

console.log('count:', count);
