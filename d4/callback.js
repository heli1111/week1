function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);
      break;
	       // execute callback
    }
  }
}

function actionWhenFound(x) {
  console.log("Found Waldo at index " + x);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
