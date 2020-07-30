function jazzify(arr) {
	if (arr ==[]){return}
	else{return arr.map(
	x=>{if (x.endsWith(7)){return x}
		 else {return x.concat(7)}}
	)}
}