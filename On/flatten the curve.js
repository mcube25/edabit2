function flattenCurve(arr) {
	const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length;
	return arr.fill(Math.round(mean * 10, 1) / 10);
}