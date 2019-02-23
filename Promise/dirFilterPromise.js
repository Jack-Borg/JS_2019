var fs = require("fs");
var path = require("path");

function readDirFiltered(filePath, ext, callback) {
	if (!ext.startsWith(".")) {
		ext = "." + ext;
	}
	fs.readdir(filePath, function(err, data) {
		if (err) {
			return callback(err);
		} else {
			data = data.filter(file => path.extname(file) == ext);
			return callback(err, data);
		}
	});
}

const readDirFilterPromise = (filePath, ext) => {
	return new Promise((resolve, reject) => {
		ext = "." + ext;
		fs.readdir(filePath, (err, data) => {
			if (err) {
				return reject(err);
			} else {
				data = data.filter(file => path.extname(file) == ext);
				return resolve(data);
			}
		});
	});
};

module.exports = { readDirFiltered, readDirFilterPromise };
