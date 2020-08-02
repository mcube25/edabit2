const sumFoundIndexes = (arr, n) => (
	arr.reduce((a, e, i) => a + ((e === n) && i), 0)
);