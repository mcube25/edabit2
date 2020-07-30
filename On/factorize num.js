function factorize(num) {
	let factor = []
	for (let i=1; i<=num; i++){
		if (num % i === 0){
			factor.push(i)
		}
	}return factor
}