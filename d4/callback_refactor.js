function findWaldo(arr, found) {
	var i = 0;
	arr.forEach(function(name){
		if (name === "Waldo") {
			found(i);
    	}
    i++;
  	})
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
