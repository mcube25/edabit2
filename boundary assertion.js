function acceptedWords(arr) {
	
	return arr.filter(x=> x.match(/^[^C]/));
}