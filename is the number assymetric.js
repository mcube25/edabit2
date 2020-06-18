function isSymmetrical(num) {
	if (num.toString() === num.toString().split("").reverse().join("")){return true}
	else{return false}
}