const cardEntry = (
	title,
	description = NaN,
	project = NaN,
	dueDate = NaN,
	priority = NaN

	//change NaN into Null?
) => {
	// creating card object
	let card = {};

	// parameters as keys to this object
	card.title = title;
	card.description = description;
	card.dueDate = dueDate;
	card.priority = priority;
	card.project = project;

	//which other parameters / properties will a card have? Notes? Attachment? Checklist?

	//set create date
	card.creationDate = new Date(); //

	//set unique identifier
	card.id = Date.now();

	//cards array in local storage?
	const allCardsArr =
		localStorage.getItem("cards") !== null
			? JSON.parse(localStorage.getItem("cards"))
			: [];

	allCardsArr.push(card);

	const jso = JSON.stringify(allCardsArr);

	localStorage.setItem("cards", jso);

	//projects array in local storage?
	const projectsArr =
		localStorage.getItem("projects") !== null
			? JSON.parse(localStorage.getItem("projects"))
			: [];

	if (!projectsArr.includes(card.project)) {
		projectsArr.push(card.project);
	}

	const projectJSON = JSON.stringify(projectsArr);

	localStorage.setItem("projects", projectJSON);

	return card;
};

const deleteCard = (id) => {
	const allCards = JSON.parse(localStorage.getItem("cards"));
	const result = allCards.filter((card) => card.id !== parseInt(id));
	// console.log(allCards.map((elem) => elem.id === parseInt(id)));
	const jso = JSON.stringify(result);
	localStorage.setItem("cards", jso);
};

// Default export
export { cardEntry, deleteCard };
