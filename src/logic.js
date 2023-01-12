let allCards = [];

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

	const cardJSON = JSON.stringify(card);

	localStorage.setItem(`card${card.id}`, cardJSON);

	// return card;
};

// Default export
export { allCards, cardEntry };
