function clone(arr) {
	arr.push(arr.slice(0))
	return arr
}