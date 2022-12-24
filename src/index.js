import wrapper from "./content.js";
import footer from "./footer/footer.js";

function component() {
	const element = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.innerHTML = "toDay";

	element.appendChild(h1);
	return element;
}

document.body.appendChild(component());
document.body.appendChild(wrapper());
document.body.appendChild(footer());
