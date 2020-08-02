function evenOddTransform(arr, n) {
	return arr.map( x => x % 2 ===0 ? x - 2*n : x + 2*n )
	
}