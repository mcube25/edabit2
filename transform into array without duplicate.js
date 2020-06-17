function set(arr) {
	return [...arr].filter((a,b)=> arr.indexOf(a) === b) ;
}