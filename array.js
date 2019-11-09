let numbers = [1, 90, 78, 3, 22, 187, 21];
let students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
let mix = [5, 'David', { name: 'Ella' }, 23, 'Frank'];

// Array.forEach() => return value: undefined
// 01. Create a function that logs each number individually
let logElements = array => array.forEach(e => console.log(e));
logElements(numbers);

// 02. Create a function that logs each student's name
let logNames = array => array.forEach(e => console.log(e.name));
logNames(students);

// Array.map() => return value: a new array
let makeNewArray = (array, func) => array.map(func);

// 03. Create a function that adds 1 to each number and returns a new array
let plusOne = e => e + 1;
let newNumbers = makeNewArray(numbers, plusOne);
console.log(newNumbers);

// 04. Create a function that returns an array of  all the students' names
// ['Albert', 'Bob', 'Claudia']
let getNames = e => e.name;
let studentsNames = makeNewArray(students, getNames);
console.log(studentsNames);

// Array.filter() => return value: a new array
// 05. Create a function that returns an array with only numbers equal to
// or greater than 22
// [90, 78, 22, 187]
let makeFilterArray = (array, filter, func) =>
  array.filter(e => func(e, filter));

let getElementGreaterThanOrEqualToNumber = (e, number) => {
  if (e >= number) {
    return e;
  }
};

let numbersEqualToOrGreaterThan22 = makeFilterArray(
  numbers,
  22,
  getElementGreaterThanOrEqualToNumber
);
console.log(numbersEqualToOrGreaterThan22);

// 06. Create a function that returns an array with only students
// whose name is more than 6 characters long
// [{name:'Claudia'}]
let getElementNameLengthGreaterThanNumber = (e, number) => {
  if (e.name.length > number) {
    return e;
  }
};

let namesLengthGreaterThan6 = makeFilterArray(
  students,
  6,
  getElementNameLengthGreaterThanNumber
);
console.log(namesLengthGreaterThan6);

// 07. Create a function that returns an array with only strings from mix
// ['David', 'Frank']
let getStringOnly = e => {
  if (typeof e === 'string') {
    return e;
  }
};

let stringOnly = mix.filter(e => getStringOnly(e));
console.log(stringOnly);

// .find() => return value: first element
// 08. Create a function that returns the first number greater than 100
// 187
let findNumberGreaterThanGivenNumber = (array, number) =>
  array.find(e => e > number);
console.log(findNumberGreaterThanGivenNumber(numbers, 100));

// 09. Create a function that returns the first student whose name is Bob
// {
// 	name: 'Bob'
// }
let findName = (array, name) => array.find(e => e.name === name);
console.log(findName(students, 'Bob'));

// .reduce() => return value: the single value that results from the reduction.
// 10. Create a function that returns the sum of all numbers using reduce()
// 402
let getSumOfNumbers = array => array.reduce((acc, cur) => acc + cur);
console.log(getSumOfNumbers(numbers));

// 11. Create a function that returns the sum of all numbers without using reduce()
// 402
let getSumOfAllNumbers = array => {
  let result = 0;
  array.forEach(e => (result += e));
  return result;
};
console.log(getSumOfAllNumbers(numbers));

// 12. Create a function that returns the difference of all numbers, using reduce()
//  -400
let getDifferenceOfNumbers = array => array.reduce((acc, cur) => acc - cur);
console.log(getDifferenceOfNumbers(numbers));

// 13. Create a function that returns the product of all numbers
// 1819457640
let getProductOfNumbers = array => array.reduce((acc, cur) => acc * cur);
console.log(getProductOfNumbers(numbers));

// .sort() ==> return value: The sorted array.
// 14. Create a function that returns an array with numbers sorted in descending order
// [187, 90, 78, 22, 21, 3, 1]
const ASCENDING = Symbol('ASCENDING');
const DESCENDING = Symbol('DESCENDING');

let compareNumbersByAscending = (a, b) => a - b;
let compareNumbersByDescending = (a, b) => b - a;
let sorting = (array, type, direction) => {
  if (Array.isArray(array) !== true) {
    console.log(`It's not an array`);
    return false;
  }

  if (type === 'number') {
    array.sort(compareNumbersByAscending);
  } else {
    array.sort();
  }

  if (direction === DESCENDING) {
    array.reverse();
  }

  return array;
};

console.log(sorting(numbers, 'number', DESCENDING));

// 15. Create a function that returns an array with students sorted
// by ascending
// {name:'Albert'}, [{name:'Bob'}, {name:'Claudia'}]

console.log(sorting(students, 'string', DESCENDING));
