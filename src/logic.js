const cardEntry = (title, description = NaN, dueDate = NaN, priority = NaN) => {
	// creating card object
	let card = {};

	// parameters as keys to this object
	card.title = title;
	card.description = description;
	card.dueDate = dueDate;
	card.priority = priority;

	//which other parameters / properties will a card have? Notes? Attachment? Checklist?

	//set create date
	card.creationDate = new Date(); //

	//set unique identifier
	card.id = Date.now();

	const allCardsArr =
		localStorage.getItem("cards") !== null
			? JSON.parse(localStorage.getItem("cards"))
			: [];

	allCardsArr.push(card);

	const jso = JSON.stringify(allCardsArr);

	localStorage.setItem("cards", jso);

	return card;
};

const deleteCard = (id) => {
	localStorage.removeItem(`card${id}`);
};

// Default export
export { cardEntry, deleteCard };
