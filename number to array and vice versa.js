function toArray(num) {
	return num.toString().split("").map(x=>parseInt(x));
}

function toNumber(arr) {
	return Number(arr.join(''))
}