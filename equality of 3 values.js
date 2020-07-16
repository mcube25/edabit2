function equal(a, b, c) {
	if (arguments[0] == arguments[1] && arguments[1] !== arguments[2]
		 || arguments[0] == arguments[2] && arguments[1] !== arguments[2]
		 ){
		return +"2"
	}else if (arguments[0]==arguments[1] && arguments[1]==arguments[2]){
		return +"3"
	}else{return +"0"}
}