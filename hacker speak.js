function hackerSpeak(str) {
	let x = {a:4,e:3, i:1,o:"0",s:5}
	for(let i = 0; i<str.length; i++){
		if(x[str[i]]){str= str.replace(str[i], x[str[i]] )}
	}
	return str
}