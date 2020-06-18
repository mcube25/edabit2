function indexShuffle(str) {
	return str.split("").
	filter((a,b)=>(str.indexOf(a)%2==0)).
	concat(str.split("").filter((a,b)=>(str.indexOf(a)%2!==0))).join("")
}