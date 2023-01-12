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
			//
			const newCardForm = document.querySelector(".newCardForm");
			const titleInput = newCardForm.querySelector(
				"input[name='title']"
			).value;
			if (titleInput.length > 0) {
				console.log("there is a title");
				cardEntry(titleInput);
			}
		}
	);
}

export { toggleNewCardInput };
