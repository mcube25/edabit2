function evenlyDivisible(a, b, c) {
	var result = 0;
	for (var i = a; i <= b; i++) {
		if (i % c === 0) {
			result+=i;
		}
	}
	return result;
}