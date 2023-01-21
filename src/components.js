function header() {
	const element = document.createElement("header");

	const menuIcon = document.createElement("i");
	menuIcon.classList.add("fa", "fa-bars", "menuIcon");
	element.appendChild(menuIcon);

	const h1 = document.createElement("h1");
	h1.innerHTML = "toDay";
	element.appendChild(h1);

	return element;
}

function main() {
	const element = document.createElement("main");
	return element;
}

function cardsWrapper() {
	const element = document.createElement("div");
	element.classList.add("cardsWrapper");
	return element;
}

function newCardForm() {
	const element = document.createElement("div");
	element.classList.add("newCardFormWrapper");
	const form = document.createElement("form");

	function createFormLabelAndInput(name, type, label = NaN) {
		const element = document.createElement("li");

		if (label) {
			const labelTitle = document.createElement("label");
			labelTitle.setAttribute("for", name);
			labelTitle.innerHTML = label + ": ";
			element.appendChild(labelTitle);
		}

		const inputTitle = document.createElement("input");
		inputTitle.setAttribute("name", name);
		inputTitle.setAttribute("type", type);

		element.appendChild(inputTitle);

		//input btn

		return element;
	}

	//input Title
	const inputTitle = createFormLabelAndInput("title", "text");
	inputTitle.querySelector("input").setAttribute("placeholder", "title");
	form.appendChild(inputTitle);

	//input Description
	const inputDescription = createFormLabelAndInput("description", "text");
	inputDescription
		.querySelector("input")
		.setAttribute("placeholder", "description");
	form.appendChild(inputDescription);

	//input Date
	form.appendChild(createFormLabelAndInput("due date", "date", "due date"));

	//input Priority
	const inputPriority = document.createElement("li");
	const priorityLabel = document.createElement("label");
	priorityLabel.innerHTML = "priority: ";
	priorityLabel.setAttribute("for", "priority");

	const prioritySelect = document.createElement("select");
	prioritySelect.setAttribute("name", "priority");

	const option0 = document.createElement("option");
	option0.innerHTML = "none";
	option0.setAttribute("value", NaN);
	option0.setAttribute("selected", "selected");
	prioritySelect.appendChild(option0);

	const option1 = document.createElement("option");
	option1.innerHTML = "low";
	option1.setAttribute("value", "low");
	prioritySelect.appendChild(option1);

	const option2 = document.createElement("option");
	option2.innerHTML = "medium";
	option2.setAttribute("value", "medium");
	prioritySelect.appendChild(option2);

	const option3 = document.createElement("option");
	option3.innerHTML = "high";
	option3.setAttribute("value", "high");
	prioritySelect.appendChild(option3);

	inputPriority.appendChild(priorityLabel);
	inputPriority.appendChild(prioritySelect);

	form.appendChild(inputPriority);

	//input Button
	const inputBtn = document.createElement("button");
	inputBtn.setAttribute("type", "submit");
	inputBtn.setAttribute("id", "submitNewCardBtn");
	inputBtn.innerHTML = "submit";
	form.appendChild(inputBtn);

	form.setAttribute("onsubmit", "return false");
	form.classList.add("newCardForm");

	element.appendChild(form);
	return element;
}

function formContainer() {
	const element = document.createElement("div");
	element.classList.add("formContainer");

	element.appendChild(newCardForm());

	return element;
}

function createNewCard(obj) {
	const element = document.createElement("div");
	element.classList.add("cardNode");
	element.id = obj.id;

	const iconWrapper = document.createElement("div");
	iconWrapper.classList.add("iconWrapper");
	iconWrapper.innerHTML = "<i class='fa-solid fa-trash'></i>";

	element.appendChild(iconWrapper);

	//is this the best way? Or is is better to type out all possible parameters?
	// for (let key in obj) {
	// 	const value = obj[key];
	// 	if (value) {
	// 		let entryLine = document.createElement("div");
	// 		entryLine.classList.add(key);
	// 		entryLine.innerHTML += key + ": " + value;
	// 		element.appendChild(entryLine);
	// 	}
	// }

	function entryLine(name) {
		if (obj[name]) {
			const entryLine = document.createElement("div");
			entryLine.classList.add(name);
			entryLine.innerHTML = name + ": " + obj[name];
			element.appendChild(entryLine);
		}
	}

	entryLine("title");
	entryLine("description");
	entryLine("dueDate");
	entryLine("priority");
	entryLine("creationDate");

	return element;
}

function getLocalStorage() {
	//if exists
	const arr = JSON.parse(localStorage.getItem("cards"));

	return arr;
}

function sortLocalStorage(arr) {
	//sort objects on id, which is date
	//if exists
	if (arr) {
		arr.sort((a, b) => {
			return a.id - b.id;
		});
		return arr;
	}
}

function renderCardsToDOM(arr) {
	if (arr) {
		const cardsContainer = document.querySelector(".cardsWrapper");
		arr.forEach((element) => {
			return cardsContainer.appendChild(createNewCard(element));
		});
	}
}

function aside() {
	const element = document.createElement("aside");

	function fillList(category, ...names) {
		const planList = document.createElement("ul");
		for (let i = 0; i < names.length; i++) {
			const item = document.createElement("li");
			item.innerHTML = names[i];
			item.classList.add(category, names[i]);
			planList.appendChild(item);
		}
		return planList;
	}

	//plan
	const planHeading = document.createElement("h2");
	planHeading.innerHTML = "plan";
	element.appendChild(planHeading);
	element.appendChild(
		fillList("plan", "all", "year", "month", "week", "day")
	);

	//review
	// const reviewHeading = document.createElement("h2");
	// reviewHeading.innerHTML = "review";
	// element.appendChild(reviewHeading);
	// element.appendChild(fillList("review", "year", "month", "week", "day"));

	//other tags
	const otherHeading = document.createElement("h2");
	otherHeading.innerHTML = "tags";
	element.appendChild(otherHeading);
	element.appendChild(fillList("tags", "all", "inbox", "deleted"));

	return element;
}

export {
	header,
	main,
	cardsWrapper,
	newCardForm,
	formContainer,
	createNewCard,
	getLocalStorage,
	sortLocalStorage,
	renderCardsToDOM,
	aside,
};
