function sliceSum(arr, n) {
	if (n < 0){ return;}
	if (n == 0 ){return 0;}
	else {return  arr.slice(0, n).reduce((n, y)=> n +y);}
}