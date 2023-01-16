// js modules
import footer from "./footer/footer.js";
import { allCards } from "./logic.js";
import {
	header,
	main,
	cardsWrapper, // kan direct in main?
	newCardForm, // not used here
	formContainer,
	createNewCard,
	aside,
} from "./components.js";
import { submitNewCardInput } from "./DOM.js";

//css modules
import "../node_modules/reset-css/reset.css";
import "./style.css";
import "./animations.css";
import "./footer/footer.css";

document.body.appendChild(header());

document.body.appendChild(main());
document.querySelector("main").appendChild(cardsWrapper());

const cardsContainer = document.querySelector(".cardsWrapper");
cardsContainer.appendChild(formContainer());

//create a card for each element in localstorage (this presuposes everything in local storage is a card)
for (var i = 0; i < localStorage.length; i++) {
	let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
	cardsContainer.appendChild(createNewCard(obj));
}

document.body.appendChild(aside());

document.body.appendChild(footer());

submitNewCardInput();
