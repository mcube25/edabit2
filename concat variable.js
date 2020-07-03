function concat(...args) {
	return [...args].reduce((x, y)=> x.concat(y));
}