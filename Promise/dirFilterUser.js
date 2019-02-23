var { readDirFiltered, readDirFilterPromise } = require("./dirFilterPromise.js");

const filePath = process.argv[2];
const ext = process.argv[3];

// readDirFiltered(filePath, ext, (err, files) => {
// 	if (err) {
// 		console.log("oh shit");
// 	} else {
// 		files.forEach(file => {
// 			console.log(file);
// 		});
// 	}
// });

readDirFilterPromise(filePath, "json")
	.then(d => {
		console.log(d.join("\n"));
		return readDirFilterPromise(filePath, "js");
	})
	.then(d => {
		console.log(d.join("\n"));
		return readDirFilterPromise(filePath, "txt");
	})
	.then(d => console.log(d.join("\n")))
	.catch(e => console.log("upps", e));
