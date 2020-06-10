function getAbsSum(arr) {
	
	return arr.reduce((x, y) => x + Math.abs(y), 0);
}