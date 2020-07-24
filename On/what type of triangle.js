function getTriangleType(arr) {
	return arr.length != 3 ? 
		"not a triangle" :
		arr[0]==arr[1] && arr[1]==arr[2] ?
		"equilateral" :
		arr[0]==arr[1] || arr[1]==arr[2] || arr[0]==arr[2] ?
		 "isosceles" :
		"scalene"
}