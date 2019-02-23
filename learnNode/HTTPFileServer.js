var http = require("http");
var fs = require("fs");

const filePath = process.argv[3];

var server = http.createServer(function(request, response) {});
server.listen(process.argv[2]);

fs.createReadStream();
