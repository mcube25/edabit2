function paths(n) {
	let result = n
	if (n <= 0){return }
	while(n > 1){ n--; 
	result*= n}
	return result
}