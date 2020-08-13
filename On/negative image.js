function reverseImage(image) {
	return image.map(v => v.map(x => +!x));
}