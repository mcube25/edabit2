function marathonDistance(d){
	return d.reduce((acc, cur) =>acc + Math.abs(cur) ,0) == 25;
}