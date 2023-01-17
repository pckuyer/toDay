import { newCardForm, createNewCard } from "./components.js";
import { cardEntry, deleteCard } from "./logic.js";

import { newCardAnimation, newCardTiming } from "./animations.js";

function submitNewCardInput() {
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

function removeCardEventHandlers() {
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

export { submitNewCardInput, removeCardEventHandlers };
