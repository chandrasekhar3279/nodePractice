const path = require('path')
// console.log(path.sep)

const filePath = path.join('/content','subcontent','test.txt')
console.log(filePath)

const base = path.basename('/content','subcontent','test.txt')
console.log(base)

const absolute = path.resolve(__dirname,'content','subcontent','test.txt')
console.log(absolute);