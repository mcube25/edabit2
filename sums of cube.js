function sumOfCubes(nums) {
	if (nums == []){
		return 0
	}else{
		return nums.map(x=>x**3).reduce((y,z)=>(y + z),0);
	}
	
}