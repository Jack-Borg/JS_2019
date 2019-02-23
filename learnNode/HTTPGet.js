var http = require("http");

const filePath = process.argv[2];

http.get(filePath, function(response) {
	response.setEncoding("utf8");
	response.on("data", console.log);
});
