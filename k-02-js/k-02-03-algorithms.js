// Algorithms
let phrase = 'JavaScript is the best';
let prices = ['$22', '€99', '$75', '£80', '€43', '$22'];
let names = ['anna', 'john', 'bob', 'frank'];

// #020301
// Flip each word in phrase and return a single string
// 'tpircSavaJ si eht tseb'
let getReverseString1 = str =>
  str
    .split('')
    .reverse()
    .join('');

let getReverseString2 = str => {
  if (typeof str != 'string') console.log('this is not good!');

  if (str === '') {
    return '';
  } else {
    return getReverseString2(str.substr(1)) + str.charAt(0);
  }
};

let getReverseString3 = str => {
  if (typeof str != 'string') {
    console.log('this is not good!');
    return undefined;
  }

  let returnValue;
  switch (str.length) {
    case 0:
      returnValue = '';
      break;
    case 1:
      returnValue = str;
      break;
    default:
      returnValue =
        str.charAt(str.length - 1) +
        getReverseString3(str.slice(1, -1)) +
        str.charAt(0);
  }

  return returnValue;
};

let flipWordInPhrase = phrase => {
  const words = phrase.split(' ');
  // const result = words.map(getReverseString1);
  // const result = words.map(getReverseString2);
  const result = words.map(getReverseString3);

  return result;
};

console.log('#020301', flipWordInPhrase(phrase));

// #020302
// Convert the array of prices into the following array of objects.
// Make sure that the value property is of type number.
let newPrices = [];
let getNewPrices = array => {
  array.forEach(str => {
    let objPrice = {};

    objPrice['currency'] = str.charAt(0);
    objPrice['value'] = str.substr(1);
    newPrices.push(objPrice);
  });

  return newPrices;
};

console.log('#020302', getNewPrices(prices));

// #020303
// From the array names return only the palindromes (a palindrome is a word
// that reads exactly the same from left to right and backwards).
// ['anna', 'bob']
let palindromes = [];
let isPalindrome1 = str => (str === getReverseString3(str) ? true : false);
let isPalindrome2 = str => {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome2(str.slice(1, str.length - 1));
  } else {
    return false;
  }
};

let getPalindromes = array => {
  array.forEach(str => {
    if (isPalindrome2(str) === true) {
      palindromes.push(str);
    }
  });

  return palindromes;
};

console.log('#020303', getPalindromes(names));

// #020304
// Create a function that, given any number (positive integer) returns
// the number in Roman numerals.
const RomanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  XL: 40,
  XX: 20,
  X: 10,
  IX: 9,
  VIII: 8,
  VII: 7,
  VI: 6,
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1
};

let getRomanNumerals = number => {
  let romanNumerals = '';

  for (key in RomanNumerals) {
    while (number >= RomanNumerals[key]) {
      romanNumerals += key;
      number -= RomanNumerals[key];
    }
  }

  return romanNumerals;
};

console.log('#020304', getRomanNumerals(1387));

// #020305
// Create a function that loops numbers from 0 to 20. For each number, if the number is
// a multiple of 3, log fizz; if the number is a multiple of 5, log buzz; if the number is
// a multiple of both 3 and 5, log fizzbuzz; for all other numbers, log the number itself.
let logFizzBuzz = (firstNum, lastNum) => {
  let inc = firstNum;

  while (inc <= lastNum) {
    if (inc % 15 === 0) {
      console.log('fizzbuzz');
    } else if (inc % 3 == 0) {
      console.log('fizz');
    } else if (inc % 5 == 0) {
      console.log('buzz');
    } else {
      console.log(inc);
    }

    inc++;
  }
};

console.log('#020305');
logFizzBuzz(12, 32);

// #020306
// Create a function a that takes 2 numbers as parameters and returns their sum.
// Create a function b that takes 4 parameters, the first is a function that
// takes itself 2 parameters, the other 3 are numbers.
// Call function b and pass as parameters function a and 3 numbers.
// function b should trigger function a passing as parameters the first 2 numbers,
// therefore getting their sum, then subtract the last number and return the result.
console.log('#020306');
