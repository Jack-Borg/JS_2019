var fs = require("fs");
var path = require("path");

const filePath = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(filePath, function(err, files) {
	files = files.filter(file => path.extname(file) == ext);
	files.forEach(file => {
		console.log(file);
	});
});
