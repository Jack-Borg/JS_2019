var http = require("http");

const URLs = [
	{ url: process.argv[2], index: 0 },
	{ url: process.argv[3], index: 1 },
	{ url: process.argv[4], index: 2 }
];

var res = [];
var count = 0;

URLs.forEach(URL => {
	http.get(URL.url, function(response) {
		var total = "";
		response.setEncoding("utf8");
		response.on("data", data => {
			total += data;
		});
		response.on("end", () => {
			res[URL.index] = total;
			count++;
			if (count === 3) {
				printRes();
			}
		});
	});
});

function printRes() {
	res.forEach(e => console.log(e));
}
