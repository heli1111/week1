var words = ["ground", "control", "to", "major", "tom"];


//map function called three times
var lengths = map(words, function(word) {
	return word.length;
});

console.log(lengths);

var upperCases = map(words, function(word) {
  return word.toUpperCase();
});

console.log(upperCases);

var reverses = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(reverses);

function map(arr, func){
	var results = [];
	for (let element of arr){
	var result = func(element);
	results.push(result);
	}
	return results;
}