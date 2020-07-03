function getBudgets(arr) {
	return arr.reduce((x, y)=> x + y.budget, 0);
}