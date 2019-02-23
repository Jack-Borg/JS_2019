var fs = require('fs')
const path = process.argv[2]

fs.readFile(path, function (err, fileContents) {
    const lines = fileContents.toString().split('\n').length - 1
    console.log(lines)
})

