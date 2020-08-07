function doubleLetters(word) {
	return /(\w)\1/.test(word)
}