import _ from "lodash";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

// You must implement the makeTable(..) function, used below:
const table = makeTable(persons);
document.getElementById("my-table").innerHTML = table;

// import _ from "lodash";
// import "./style.css";
// import Icon from "./icon.png";
// import printMe from "./print.js";

// function component() {
// 	var element = document.createElement("div");

// 	const name = "Kurt Wonnegut";
// 	setTimeout(() => alert(`Hello there from ${name}`), 1000);

// 	// var btn = document.createElement("button");

// 	// element.innerHTML = _.join(["Hello", "webpack"], " ");

// 	// btn.innerHTML = "Click me and check the console!";
// 	// btn.onclick = printMe;

// 	// element.appendChild(btn);

// 	// element.classList.add("hello");

// 	// // Add the image to our existing div.
// 	// var myIcon = new Image();
// 	// myIcon.src = Icon;

// 	// element.appendChild(myIcon);

// 	return element;
// }

// document.body.appendChild(component());
