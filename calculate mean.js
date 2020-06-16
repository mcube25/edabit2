function mean(arr) {
	return  +(arr.reduce((x,y)=> x+y)/arr.length).toFixed(2)
}