//sort student in alphabetical order
//if same name, prioritize by age
//write custom comparator
	// first by name - ascending
	// then by age - descending

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



//function to sort student by name - ascending
//if name the same, sort by age - descending

var sortedStudents = students.sort(function customComparator(a,b){
	if (a.name > b.name) {
    	return 1;
  }
  if (a.name < b.name) {
    	return -1;
  }
  if (a.name === b.name){
		return b.age - a.age;
	}
  return 0;
});

//print new array to monitor
console.log(sortedStudents);















