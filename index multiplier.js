function indexMultiplier(arr) {
	return arr.map((x,y)=> x*y).reduce((a, b)=> a+b, 0);
}
//Return the sum of all items in an array, where each item 
//is multiplied by its index (zero-based). For empty arrays, return 0.