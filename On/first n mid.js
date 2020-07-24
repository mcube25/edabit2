function stmid(str) {
	return (str.split(" ").map(i => {
		return (i.length % 2 == 0)? i[0]: i[Math.floor(i.length/2)];
	})).join("");
}