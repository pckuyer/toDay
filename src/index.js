// modules
import footer from "./footer/footer.js";

//css
import "../node_modules/reset-css/reset.css";
import "./style.css";
import "./animations.css";
import "./footer/footer.css";

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
	// const element = document.createElement("div");
	// element.classList.add("newCardFormWrapper");
	// const form = document.createElement("form");
	// const inputTitle = document.createElement("input");
	// form.appendChild(inputTitle);
	// element.appendChild(form);
	// return element;
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

function createNewCard() {
	const element = document.createElement("div");
	element.classList.add("cardNode");

	return element;
}

function aside() {
	const element = document.createElement("aside");
	return element;
}

document.body.appendChild(header());

document.body.appendChild(main());
document.querySelector("main").appendChild(cardsWrapper());
document.querySelector(".cardsWrapper").appendChild(createNewCard());

const cardsContainer = document.querySelector(".cardsWrapper");
cardsContainer.appendChild(newCardButtonContainer());

document.body.appendChild(aside());

document.body.appendChild(footer());
