function charPosition(str){
	var strNew = str.split(" ").join("").toLowerCase();
	var charPosition = {};
	
	for (var i = 0; i < strNew.length; i++) {
		var letter = strNew[i];	
		if 	(charPosition[letter] === undefined){
			charPosition[letter] = [];
		} 
		charPosition[letter].push(i);
	}
	return charPosition;
}

console.log(charPosition('park crew'));



