const myPromise = require("./myPromise");

const p1 = myPromise("hello", 2000);
const p2 = myPromise("hello again", 200);
const p3 = myPromise("once more", 20);

let promises = [p1, p2, p3];

Promise.all(promises)
	.then(msg => console.log(msg))
	.catch(e => console.log(e))
	.finally(() => console.log("finally"));
