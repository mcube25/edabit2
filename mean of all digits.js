function mean(num) {
	let x = num.toString().split("").length;
	let y = num.toString().split("").map(Number)
	let z = y.reduce((c, r)=> c + r)
	return z/x;
}