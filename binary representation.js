function countOnes(i) {
	return (i >>> 0).toString(2).split("").filter(x=> x==1).length;
}