function rev(n) {
	let x= n.toString().match(/[0-9]/g).reverse().join("");
	return x;
}