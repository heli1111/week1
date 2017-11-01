// counting letters 

function countLetters(str){
	var strNew = str.split(" ").join("").toLowerCase();
	var letterCount = {};
	for (let letter of strNew){
		if (letterCount[letter] === undefined){
			letterCount[letter] = 1;
		}else {
			letterCount[letter]+= 1;
		}
		
	}

	return letterCount;
}


console.log(countLetters('hello world'));



