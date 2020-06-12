function arrayOperation(x, y, n) {
	var r = [];
  for (var i = x; i <= y; i++) {
		if (i % n == 0) r.push(i);
	}
  return r;
}