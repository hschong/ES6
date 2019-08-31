let numbers = [1, 90, 78, 3, 22, 187, 21];
let students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
let mix = [5, 'David', { name: 'Ella' }, 23, 'Frank'];

// .forEach() => return value: undefined
// 020101. Create a function that logs each number individually
console.log('20101. ');
let logElements = array => array.forEach(e => console.log(e));
logElements(numbers);

// 020102. Create a function that logs each student's name
console.log('20102. ');
let logNames = array => array.forEach(e => console.log(e.name));
logNames(students);

// .map() => return value: a new array
// 020103. Create a function that adds 1 to each number and returns a new array
// [2, 91, 79, 4, 23, 188, 22]
let plusOne = e => ++e;
let makeNewArray = (array, func) => array.map(func);
let newNumbers = makeNewArray(numbers, plusOne);
// console.log('#20103 ===> ', newNumbers)
console.log('#20103 ===> ', numbers.map(e => e + 1));

// 020104. Create a function that returns an array of  all the students' names
// ['Albert', 'Bob', 'Claudia']
console.log('20104. ');
let getName = e => e.name;
let studentNames = makeNewArray(students, getName);
console.log(studentNames);

// .filter() => return value: a new array
// 020105. Create a function that returns an array with only numbers equal to
// or greater than 22
// [91, 79, 23, 188, 22]
console.log('20105. ');
let isGreaterThanGivenNumberOrEqual = (e, givenNumber) => {
  if (e >= givenNumber) {
    return true;
  } else {
    return false;
  }
};

let makeNewFilteredArray = (array, filter, func) =>
  array.filter(e => func(e, filter));
let numbersGreaterThan22 = makeNewFilteredArray(
  newNumbers,
  22,
  isGreaterThanGivenNumberOrEqual
);
console.log(numbersGreaterThan22);

// 020106. Create a function that returns an array with only numbers greater
// than the parameter passed onto the function
// 70 => [90, 78, 187]
console.log('20106. ');
let isGreaterThanGivenNumber = (e, givenNumber) => {
  if (e > givenNumber) {
    return true;
  } else {
    return false;
  }
};

let numbersGreaterThanGivenNumber = makeNewFilteredArray(
  numbers,
  70,
  isGreaterThanGivenNumber
);
console.log(numbersGreaterThanGivenNumber);

// 020107. Create a function that returns an array with only students
// whose name is more than 6 characters long
// [{name:'Claudia'}]
console.log('20107. ');
let isNameLengthGreaterThanGivenNumber = (e, givenNumber) => {
  if (isGreaterThanGivenNumber(e.name.length, givenNumber)) {
    return true;
  } else {
    return false;
  }
};

let nameLengthGreaterThan6 = makeNewFilteredArray(
  students,
  6,
  isNameLengthGreaterThanGivenNumber
);
console.log(nameLengthGreaterThan6);

// 020108. Create a function that returns an array with only strings from mix
// ['David', 'Frank']
console.log('20108. ');
let getStringOnly = array => array.filter(e => typeof e === 'string');
let stringOnly = getStringOnly(mix);
console.log(stringOnly);

// .find() => return value: first element
// 020109. Create a function that returns the first number greater than 100
// 187
console.log('20109. ');
let find1stNumberGreaterThanGivenNumber = (array, givenNumber) =>
  array.find(e => e > givenNumber);
console.log(find1stNumberGreaterThanGivenNumber(numbers, 100));

// 020110. Create a function that returns the first student whose name is Bob
// {
// 	name: 'Bob'
// }
console.log('20110. ');
let findNameInArray = (array, name) => array.find(e => e.name === name);
console.log(findNameInArray(students, 'Bob'));

// .reduce() => return value: tthe single value that results from the reduction.
// 020111. Create a function that returns the sum of all numbers using reduce()
// 402
console.log('20111. ');
let getSumOfAllNumbers = array => array.reduce((acc, cur) => acc + cur);
console.log(getSumOfAllNumbers(numbers));

// 020112. Create a function that returns the sum of all numbers without using reduce()
// 402
console.log('20112. ');
let getSumOfAllElements = array => {
  let result = 0;
  array.forEach(e => (result += e));
  return result;
};
console.log(getSumOfAllElements(numbers));

// 020113. Create a function that returns the difference of all numbers, using reduce()
//  -400
console.log('20113. ');
let getDifferenceOfAllElements = array =>
  array.reduce((prevValue, curValue) => prevValue - curValue);
console.log(getDifferenceOfAllElements(numbers));

// 020114. Create a function that returns the product of all numbers
// 1819457640
console.log('20114. ');
let getProductOfAllElements = array =>
  array.reduce((prevValue, curValue) => (prevValue *= curValue));
console.log(getProductOfAllElements(numbers));

// .sort() ==> return value: The sorted array.
// 020115. Create a function that returns an array with numbers sorted in descending order
// [187, 90, 78, 22, 21, 3, 1]
console.log('20115. ');
let Ascending = Symbol('Ascending');
let Descending = Symbol('Descending');
let compareNumbers = (a, b) => a - b;

let sorting = (array, direction) => {
  switch (direction) {
    case Ascending:
      array.sort(compareNumbers);
      break;

    case Descending:
      array.sort(compareNumbers);
      array.reverse();
      break;

    default:
      console.log('ordering direction is not defined.');
  }

  return array;
};
console.log(sorting(numbers, Descending));

// 020116. Create a function that returns an array with students sorted
// by ascending
// [{name:'Bob'},{name:'Albert'},{name:'Claudia'}]

console.log('20116. ');

// Various
// #020117
// Using numbers and students, create a function that outputs the following array:
// [
//   {
//     name:'Albert',
//     age: 1
//   }, {
//     name: 'Bob',
//     age: 90
//   }, {
//     name: 'Claudia',
//     age: 78
//   }
// ]

// #020118
// In the following array, number 6 is missing. Create a function that returns
// the missing number.
// [1, 2, 3, 4, 5, 7, 8, 9, 10]

// #020119
// Given the following currency denominations
// [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]
// 27.58 => [10, 10, 5, 1, 1, 0.5, 0.05, 0.01, 0.01, 0.01]
// dens = [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]

// let denominate = (arr,num) => {
// 	let total = num
// 	let newArray = []
// 	arr.forEach((e,i) => {
// 		while (num.toFixed(2) >= e) {
// 			newArray.push(e)
// 			num = num -= e
// 		}
// 		console.log('num', num)
// 	}
// 	)
// 	return newArray
// }
// console.log(denominationFunction(dens,27.58))

// create a function that returns an array with separate denominations needed to
// reach the amount passed into the function. Optimize for higher denominations.
// 27.58 => [10, 10, 5, 1, 1, 0.5, 0.05, 0.01, 0.01, 0.01]
