const maxTotal = nums => nums.sort((a,b) => b - a).slice(0,5)
.reduce((acc,cur) => acc + cur, 0);