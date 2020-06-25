function cardHide(card) {
	return card.replace(/\d(?=\d{4})/g, "*");
}