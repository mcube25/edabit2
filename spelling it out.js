function spelling(str) {
	let x = [];
	for (let i=1; i <= str.length; i++){
		x.push(str.slice(0, i))
	}
	return x;
}