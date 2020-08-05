function century(year) {
	if (Math.ceil(year/100)== 21){return "21st century"}else
	{return Math.ceil(year/100)+"th"+" "+"century"}
}