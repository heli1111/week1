//logging wrapper

var wrapLog = function (callback, name) {
	// returns function
	//.     - calls callback function
	//.     - logs name
	//.     - input parameters
	//.     - return value of callback function
	return function(...args) {
		var res = callback(...args);
		console.log(name + "(" + args + ") =>" + res);
		return res;
	}
};





var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6


var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24


// area - funciton
// logArea - function
// wrapLog - function


// logArea = wrapLog(...)