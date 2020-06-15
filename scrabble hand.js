function maximumScore(tileHand) {
	return tileHand.reduce((x,y)=> x + y.score, 0);
}