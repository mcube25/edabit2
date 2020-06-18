function leftDigit(num) {
	let s = num.split("").find(y=> y.match(/\d+/));
	return parseInt(s);
}