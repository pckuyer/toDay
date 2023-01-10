// js modules
import footer from "./footer/footer.js";
import { allCards } from "./logic.js";
import {
	header,
	main,
	cardsWrapper, // kan direct in main?
	newCardForm, // not used
	newCardButtonContainer,
	createNewCard,
	aside,
	toggleNewCardInput,
} from "./components.js";

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

for (let i = 0; i < allCards.length; i++) {
	cardsContainer.appendChild(createNewCard(allCards[i]));
}

document.body.appendChild(aside());

document.body.appendChild(footer());

window.addEventListener("DOMContentLoaded", (event) => {
	const plusButton = document.querySelector(".plusButton");
	plusButton.addEventListener("click", toggleNewCardInput);
});
