function greetingMaker() {
	var salutation = "Hello";
	return function closure(name) {
	  return salutation + ", " + name 	
	}
}