import { newCardForm } from "./components.js";
import { cardEntry } from "./logic.js";

function toggleNewCardInput() {
	const plusButton = document.querySelector(".plusButton");
	plusButton.style.display = "none";
	document
		.querySelector(".newCardButtonContainer")
		.appendChild(newCardForm());

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
				cardEntry(
					titleInput,
					descriptionInput,
					dueDateInput,
					priorityInput
				);
				newCardForm.reset();

				//should it go back to showing the plusbtn?  (this makes adding more cards a two step process)
			}
		}
	);
}

export { toggleNewCardInput };
