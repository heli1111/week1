var countdownGenerator = function (x) {
	var i = 0;
	return function(){
		var num = x - i;
		if (num > 0){
		console.log("T-minus " + num);
		}
		if (num == 0){
		console.log("Blast Off!");
		}
		if (num < 0){
		console.log("Rockets already gone, bub!");
		}
		i += 1;
		return i;
	}
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!