function totalVolume(...boxes) {
	return [...boxes].map(x=>x.reduce((a,b)=> a* b)).reduce((a,b)=>a+b);
}