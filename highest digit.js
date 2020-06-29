//create a function that takes a number as an argument and returns the highest number
const highest = number=> Math.max(...number.toString().split(""));
//normal function
function highestDigit(number) {
	var s = number.toString().split("");
	return Math.max(...s);
}