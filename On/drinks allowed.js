function shouldServeDrinks(age, onBreak) {
	if(age < 18 && onBreak || age >18 && onBreak){return false}
	else if (age < 18 && !onBreak){return false}
	else {return true}
}