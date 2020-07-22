function bomb(str) {
	if (  (/bomb*/gi).test(str)=== true){
		return "Duck!!!"
	}else{return "There is no bomb, relax."}
}