function isVowelSandwich(str) {
	if (str.length > 3){return false}
	if (str.match(/^[^aeiou][aeiou][^aeiou]$/gi)){return true}
	else {return false}
}