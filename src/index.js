// js modules
import footer from "./footer/footer.js";
import {
	header,
	main,
	cardsWrapper, // kan direct in main?
	newCardForm, // not used here
	formContainer,
	createNewCard,
	getLocalStorage,
	sortLocalStorage,
	renderCardsToDOM,
	aside,
} from "./components.js";
import {
	addEventHandlerSubmitNewCardInput,
	addEventHandlerRemoveCard,
	addEventHanderMenuBarIcon,
	addEventHandlerCategories,
} from "./DOM.js";

//css modules
import "../node_modules/reset-css/reset.css";
import "./style.css";
import "./animations.css";
import "./footer/footer.css";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

document.body.appendChild(header());

document.body.appendChild(main());
document.querySelector("main").appendChild(cardsWrapper());

//does this need to be here?
const cardsContainer = document.querySelector(".cardsWrapper");
cardsContainer.appendChild(formContainer());

//work with cards
sortLocalStorage(getLocalStorage());
renderCardsToDOM(getLocalStorage());

document.body.appendChild(aside());

document.body.appendChild(footer());

//event listeners
addEventHandlerSubmitNewCardInput();
addEventHandlerRemoveCard();
addEventHanderMenuBarIcon();
addEventHandlerCategories();
