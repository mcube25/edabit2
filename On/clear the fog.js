const clearFog = str => {
	const replaced = str.replace(/[fog]/gi, '');
	return replaced === str ? "It's a clear day!" : replaced;
};