const fetch = require("node-fetch");

const url = "https://swapi.co/api/people/1";

fetch(url)
	.then(res => {
		if (res.status >= 400) {
			return Promise.reject({ status: res.status, error: res.json() });
		}
		return res.json();
	})
	.then(data => console.log(data))
	.catch(e => {
		if (e.status) {
			e.error.then(msg => console.error("ups", msg));
		} else {
			console.error("error", e);
		}
	})
	.finally(() => console.log("finally"));
