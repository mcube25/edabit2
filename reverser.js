function reverse(str) {
	return [...str].reverse().map(x=> x== x.toLowerCase()? 
		x.toUpperCase() : x.toLowerCase())
		.join("")
}