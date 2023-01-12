// js modules
import footer from "./footer/footer.js";
import { allCards } from "./logic.js";
import {
	header,
	main,
	cardsWrapper, // kan direct in main?
	newCardForm, // not used here
	newCardButtonContainer,
	createNewCard,
	aside,
} from "./components.js";
import { toggleNewCardInput } from "./DOM.js";

//css modules
import "../node_modules/reset-css/reset.css";
import "./style.css";
import "./animations.css";
import "./footer/footer.css";

document.body.appendChild(header());

document.body.appendChild(main());
document.querySelector("main").appendChild(cardsWrapper());

const cardsContainer = document.querySelector(".cardsWrapper");
cardsContainer.appendChild(newCardButtonContainer());

// for (let i = 0; i < allCards.length; i++) {
// 	cardsContainer.appendChild(createNewCard(allCards[i]));
// }

for (var i = 0; i < localStorage.length; i++) {
	// do something with localStorage.getItem(localStorage.key(i));
	let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
	cardsContainer.appendChild(createNewCard(obj));
}

document.body.appendChild(aside());

document.body.appendChild(footer());

//is this the right place to put event listeners?

window.addEventListener("DOMContentLoaded", (event) => {
	const plusButton = document.querySelector(".plusButton");
	plusButton.addEventListener("click", toggleNewCardInput);
});
