function clearFog(str) {
	if (str.match(/[fog]/gi)){
	return str.replace(/[fog]/gi, "");
}else {return "It's a clear day!"}
	}