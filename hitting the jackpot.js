function testJackpot(result) {
	return result.every(r => r === result[0])? true:false;
}