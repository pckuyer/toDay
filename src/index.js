// js modules
import footer from "./footer/footer.js";
import {
	header,
	main,
	cardsWrapper, // kan direct in main?
	newCardForm, // not used here
	formContainer,
	createNewCard,
	getAndSortLocalStorage,
	aside,
} from "./components.js";
import { submitNewCardInput, removeCardEventHandlers } from "./DOM.js";

//css modules
import "../node_modules/reset-css/reset.css";
import "./style.css";
import "./animations.css";
import "./footer/footer.css";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

document.body.appendChild(header());

document.body.appendChild(main());
document.querySelector("main").appendChild(cardsWrapper());

const cardsContainer = document.querySelector(".cardsWrapper");
cardsContainer.appendChild(formContainer());

const allCards = getAndSortLocalStorage();

allCards.forEach((element) => {
	// let x = Date.parse(element.creationDate);
	// console.log(x);
	return cardsContainer.appendChild(createNewCard(element));
});

document.body.appendChild(aside());

document.body.appendChild(footer());

submitNewCardInput();
removeCardEventHandlers();
