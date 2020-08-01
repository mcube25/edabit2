function anotherFunc(cx) {
	let str = "bye"
	setTimeout(() => {
cx(str)	}, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}