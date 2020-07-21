function capMe(arr) {
	return arr.toString().toLowerCase().split(",").map(x=>x.replace(x[0],
		x[0].toUpperCase()));

  }