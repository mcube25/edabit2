function coneVolume(h, r) {
	let vol= (h * (Math.PI*r**2))/3;
	return +vol.toFixed(2);
}