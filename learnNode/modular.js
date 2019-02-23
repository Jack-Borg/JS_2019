var myModule = require("./mymodule.js");

const filePath = process.argv[2];
const ext = "." + process.argv[3];

myModule(filePath, ext, printStuff);

function printStuff(err, files) {
	if (err) {
		console.log("oh shit");
	} else {
		files.forEach(file => {
			console.log(file);
		});
	}
}
