function addNums(nums) {
	return nums.toString().split(",").reduce((s, d)=> s + +d, 0);
}