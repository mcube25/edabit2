function identicalFilter(arr) {
	return arr.filter(x=> new Set(x).size == 1)
}