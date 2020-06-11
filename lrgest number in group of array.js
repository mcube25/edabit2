function findLargestNums(arr) {
	let answer = [];
	for (i=0; i < arr.length; i++){
        answer.push(Math.max(...arr[i]));
        //	return [...arr].map(x=> Math.max(...x));
	}
	return answer;
}
