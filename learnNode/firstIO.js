var fs = require('fs')

const path = process.argv[2]
const str = fs.readFileSync(path).toString()
const lines = str.split("\n").length -1

console.log(lines)