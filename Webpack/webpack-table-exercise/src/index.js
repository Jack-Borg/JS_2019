import _ from "lodash";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

class Person {
	constructor(fn, ln, s) {
		this.firstName = fn;
		this.lastName = ln;
		this.favoriteSport = s;
	}
}

const persons = [
	new Person("Kurt", "Wonnegut", "Socker"),
	new Person("Jan", "Peterson", "Hockey"),
	new Person("Jane", "Peterson", "Skating"),
	new Person("John", "Hansen", "Socker")
];

const cities = [
	{ city: "Lyngby", zipCode: "2800" },
	{ city: "Hvidovre", zipCode: "2650" },
	{ city: "Glostrup", zipCode: "2600" }
];

const hobbies = [
	{ name: "football", players: 22 },
	{ name: "chess", players: 2 },
	{ name: "boxing", players: 2 }
];

// You must implement the makeTable(..) function, used below:
const table = makeTable(persons);
document.getElementById("my-table").innerHTML = table;

function makeTable(data) {
	// Make the header for the table
	const headers = _.keys(data[0]).map(k => _.startCase(k));

	const thead = `<thead>
        <tr>
            ${headers.map(h => `<th scope="col">${h}</th>`).join("")}
        </tr>
    </thead>`;

	// Make the body for the table
	const tbody = `<tbody>
    ${data
		.map(d => {
			var tmp = `<tr>`;
			for (let key in d) {
				tmp += `<td>${d[key]}</td>`;
			}
			return `${tmp}</tr>`;
		})
		.join("")}
    </tbody>`;

	// Make the table with the header and body. Provide the table element with class="table"
	const table = `<table class="table">
        ${thead}
        ${tbody}
    </table>`;

	// to style with Bootstrap
	return table;
}
