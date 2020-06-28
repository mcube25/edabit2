function isSpecialArray(arr) {
	
	if (arr.every((n, i)=> n % 2 == i % 2)){return true}
	else{return false}
}