function isTriplet(n1, n2, n3) {
	if (n1**2 + n2**2 === n3**2|| n1**2 + n3**2 === n2**2 || 
		 n2**2 + n3**2 === n1**2){return true}
	else{return false}
}