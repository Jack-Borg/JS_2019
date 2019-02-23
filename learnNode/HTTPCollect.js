var http = require("http");

var count = 0;
var total = "";
const filePath = process.argv[2];

http.get(filePath, function(response) {
	response.setEncoding("utf8");
	response.on("data", data => {
		total += data;
		count += data.length;
	});
	response.on("end", () => {
		console.log(count);
		console.log(total);
	});
});
