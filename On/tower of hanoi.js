var towerHanoi = function(discs) {
	let moves = 0;
	(function play(discs) {
		if(discs > 0) {
			play(discs - 1);
			moves++;
			play(discs - 1);
		}
	}(discs));
	
	return moves;
}