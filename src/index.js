function component() {
	const element = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.innerHTML = "toDay!";

	element.appendChild(h1);
	return element;
}

document.body.appendChild(component());
