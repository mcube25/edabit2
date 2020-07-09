function multiplyNums(nums) {
	return Number(nums.split(", ").reduce((a, b)=> a * b));
}