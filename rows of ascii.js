function formatAscii(str, width) {
	let m = new RegExp(`.{${width}}`, 'g');
	return str.match(m).join('\n')
}