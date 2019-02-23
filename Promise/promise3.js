const myPromise = require("./myPromise");

let res = [];

myPromise("hello", 200)
	.then(msg => {
		res.push(msg);
		return myPromise("hello again", 200);
	})
	.then(msg => {
		res.push(msg);
		return myPromise("once more", 200);
	})
	.then(msg => res.push(msg))
	.catch(e => console.log(e))
	.finally(() => console.log(res));
