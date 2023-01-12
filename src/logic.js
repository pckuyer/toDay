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

	return card;
};

//manually making test card
const card1 = cardEntry("test1", "this card", "22-11-2023", "high");
const card2 = cardEntry("test2", "this is a card", "01-01-2023", "low");
const card3 = cardEntry("test3", "Card", "31-09-2024");
const card4 = cardEntry("test4", "kaart", undefined, "high");

//pushing test card to array which contains all cards.
allCards.push(card1);
allCards.push(card2);
allCards.push(card3);
allCards.push(card4);

// Default export
export { allCards, cardEntry };
