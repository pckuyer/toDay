import { newCardForm } from "./components.js";

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
			//to do
			alert("hoi");
			// return false;
		}
	);
}

function submitNewCardForm() {
	//
}

export { toggleNewCardInput, submitNewCardForm };
