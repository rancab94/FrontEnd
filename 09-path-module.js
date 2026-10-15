//path

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.js')
console.log(filePath)

const absolute = path.resolve(__dirname, 'NODE', 'subfolder', 'app.js')
console.log(absolute)