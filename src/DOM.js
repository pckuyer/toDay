import {
	newCardForm,
	createNewCard,
	getLocalStorage,
	renderCardsToDOM,
} from "./components.js";
import { cardEntry, deleteCard } from "./logic.js";

import { newCardAnimation, newCardTiming } from "./animations.js";

function addEventHandlerSubmitNewCardInput() {
	const submitNewCardBtn = document.querySelector("#submitNewCardBtn");
	submitNewCardBtn.addEventListener(
		"click",
		function submitNewCardForm(event) {
			const newCardForm = document.querySelector(".newCardForm");

			//title
			const titleInput = newCardForm.querySelector(
				"input[name='title']"
			).value;

			const descriptionInput = newCardForm.querySelector(
				"input[name='description']"
			).value;

			const dueDateInput = newCardForm.querySelector(
				"input[name='due date']"
			).value;

			//add priority (also change default value for select )
			const priorityInput = newCardForm.querySelector(
				"select[name='priority'] option:checked"
			).value;

			if (titleInput.length > 0) {
				const newCard = cardEntry(
					titleInput,
					descriptionInput,
					dueDateInput,
					priorityInput
				);
				newCardForm.reset();

				// add new card to cards wrapper (is dom.js the right place? and this could be a function!!, is replicated index.js)
				const cardsContainer = document.querySelector(".cardsWrapper");

				const paul = createNewCard(newCard);

				cardsContainer.insertBefore(
					paul,
					document.querySelector(".cardNode")
				);

				//animate
				paul.animate(newCardAnimation, newCardTiming);
			} else {
				//what sould happen else?
			}
		}
	);
}

function addEventHandlerRemoveCard() {
	const trashBtns = document.querySelectorAll(".fa-trash");
	trashBtns.forEach((btn) =>
		btn.addEventListener("click", (e) => {
			const card = e.target.closest(".cardNode");
			//remove from dom
			card.remove();

			//animate

			//delete from localstorage
			deleteCard(card.id);
		})
	);
}

function addEventHanderMenuBarIcon() {
	function toggleMenuBar() {
		const aside = document.querySelector("aside");
		const status = aside.style.display;
		status === "block"
			? (aside.style.display = "none")
			: (aside.style.display = "block");
	}

	const menuIcon = document.querySelector(".menuIcon");
	menuIcon.addEventListener("click", toggleMenuBar);
}

function addEventHandlerCategories() {
	function filterCards(e) {
		const cardsContainer = document.querySelector(".cardsWrapper");
		cardsContainer.innerHTML = "";
		const localStorage = getLocalStorage();
		const period = e.target.classList.value;

		function filterCardsByPeriod(days) {
			// getting next weeks date
			const futureDate = new Date();
			futureDate.setDate(futureDate.getDate() + days);

			// filter
			const cardSelection = localStorage.filter(
				(item) =>
					Date.parse(item.dueDate) < futureDate &&
					Date.parse(item.dueDate) > new Date()
			);

			//code from index.js -> turn into function
			renderCardsToDOM(cardSelection);
		}

		if (period === "plan day") {
			filterCardsByPeriod(1);
		} else if (period === "plan week") {
			filterCardsByPeriod(7);
		} else if (period === "plan month") {
			filterCardsByPeriod(30); // this aint right
		} else if (period === "plan year") {
			filterCardsByPeriod(365); // this aint right
		} else if (period === "plan all") {
			renderCardsToDOM(getLocalStorage());
		}
	}

	const categories = document.querySelector("aside").querySelectorAll("li");
	categories.forEach((link) => {
		link.addEventListener("click", filterCards);
	});
}

export {
	addEventHandlerSubmitNewCardInput,
	addEventHandlerRemoveCard,
	addEventHanderMenuBarIcon,
	addEventHandlerCategories,
};
