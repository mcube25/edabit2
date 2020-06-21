function charIndex(word, char) {
	let x = word.split("").indexOf(char);
	let y = word.split("").lastIndexOf(char);
	if (x < 0 && y < 0){return undefined}
	else{	return [x, y];}

}