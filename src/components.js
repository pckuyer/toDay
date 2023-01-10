function header() {
	const element = document.createElement("header");
	const h1 = document.createElement("h1");
	h1.innerHTML = "toDay";

	element.appendChild(h1);
	return element;
}

function main() {
	const element = document.createElement("main");
	return element;
}

function cardsWrapper() {
	const element = document.createElement("div");
	element.classList.add("cardsWrapper");
	return element;
}

function newCardForm() {
	const element = document.createElement("div");
	element.classList.add("newCardFormWrapper");
	const form = document.createElement("form");

	const inputTitle = document.createElement("input");

	form.appendChild(inputTitle);

	element.appendChild(form);
	return element;
}

function newCardButtonContainer() {
	const element = document.createElement("div");
	element.classList.add("newCardButtonContainer");

	const plusButton = document.createElement("div");
	plusButton.classList.add("plusButton");
	plusButton.innerHTML = "+";

	element.appendChild(plusButton);

	return element;
}

function createNewCard(obj) {
	const element = document.createElement("div");
	element.classList.add("cardNode");

	//is this the best way? Or is is better to type out all possible parameters?
	for (let key in obj) {
		const value = obj[key];
		if (value) {
			let entryLine = document.createElement("div");
			entryLine.classList.add(key);
			entryLine.innerHTML += key + ": " + value;
			element.appendChild(entryLine);
		}
	}

	return element;
}

function aside() {
	const element = document.createElement("aside");
	return element;
}

function toggleNewCardInput() {
	const plusButton = document.querySelector(".plusButton");
	plusButton.style.display = "none";
	document
		.querySelector(".newCardButtonContainer")
		.appendChild(newCardForm());
}

export {
	header,
	main,
	cardsWrapper,
	newCardForm,
	newCardButtonContainer,
	createNewCard,
	aside,
	toggleNewCardInput,
};
