var net = require("net");
var date = new Date();

function zeroFill(n) {
	return n < 10 ? "0" + n : n;
}

function now() {
	return (
		date.getFullYear() +
		"-" +
		zeroFill(date.getMonth() + 1) +
		"-" +
		zeroFill(date.getDate()) +
		" " +
		zeroFill(date.getHours()) +
		":" +
		zeroFill(date.getMinutes())
	);
}

var server = net.createServer(function(socket) {
	socket.end(now() + "\n");
});
server.listen(process.argv[2]);
//YYYY-MM-DD hh:mm
