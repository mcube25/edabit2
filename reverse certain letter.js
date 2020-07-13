function specialReverse(s, c) {
	return s.split(" ").map(a => (a[0] === c) ? 
	a.split('').reverse().join('') : a).join(" ");
}