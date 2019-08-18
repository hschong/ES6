let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'}, {name:'Bob'}, {name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']


// .forEach() => return value: undefined
// 020101. Create a function that logs each number individually
console.log('20101. ')
let logElements = (array) => array.forEach((element) => console.log(element))
logElements(numbers)


// 020102. Create a function that logs each student's name
console.log('20102. ')
let logNames = (array) => array.forEach((element) => console.log(element.name))
logNames(students)


// .map() => return value: a new array
// 020103. Create a function that adds 1 to each number and returns a new array
// [2, 91, 79, 4, 23, 188, 22]
console.log('20103. ')
let plusOne = (element) => ++element
let makeNewArray = (array, func) => array.map(func)
let newNumbers = makeNewArray(numbers, plusOne)
console.log(newNumbers)


// 020104. Create a function that returns an array of  all the students' names
// ['Albert', 'Bob', 'Claudia']
console.log('20104. ')
let getName = (element) => element.name
let studentNames = makeNewArray(students, getName)
console.log(studentNames)


// .filter() => return value: a new array
// 020105. Create a function that returns an array with only numbers equal to 
// or greater than 22
// [91, 79, 23, 188, 22]
console.log('20105. ')
let isGreaterThanGivenNumberOrEqual = (element, givenNumber) => {
  if (element >= givenNumber) {
    return true
  } else {
    return false
  }
}

let makeNewFilteredArray = (array, filter, func) => array.filter((element) => func(element, filter))
let numbersGreaterThan22 = makeNewFilteredArray(newNumbers, 22, isGreaterThanGivenNumberOrEqual)
console.log(numbersGreaterThan22)


// 020106. Create a function that returns an array with only numbers greater
// than the parameter passed onto the function
// 70 => [90, 78, 187]
console.log('20106. ')
let isGreaterThanGivenNumber = (element, givenNumber) => {
  if (element > givenNumber) {
    return true
  } else {
    return false
  }
}

let numbersGreaterThanGivenNumber = makeNewFilteredArray(numbers, 70, isGreaterThanGivenNumber)
console.log(numbersGreaterThanGivenNumber)


// 020107. Create a function that returns an array with only students 
// whose name is more than 6 characters long
// [{name:'Claudia'}]
console.log('20107. ')
let isNameLengthGreaterThanGivenNumber = (element, givenNumber) => {
  if (isGreaterThanGivenNumber(element.name.length, givenNumber)) {
    return true
  } else {
    return false
  }
}

let nameLengthGreaterThan6 = makeNewFilteredArray(students, 6, isNameLengthGreaterThanGivenNumber)
console.log(nameLengthGreaterThan6)


// 020108. Create a function that returns an array with only strings from mix
// ['David', 'Frank']
console.log('20108. ')
let getStringOnly = (array) => array.filter((element) => typeof(element) === 'string')
let stringOnly = getStringOnly(mix)
console.log(stringOnly)


// .find() => return value: first element
// 020109. Create a function that returns the first number greater than 100
// 187
console.log('20109. ')
let find1stNumberGreaterThanGivenNumber = (array, givenNumber) => array.find((element) => element > givenNumber)
console.log(find1stNumberGreaterThanGivenNumber(numbers, 100))


// 020110. Create a function that returns the first student whose name is Bob
// {
// 	name: 'Bob'
// }
console.log('20110. ')
let findNameInArray = (array, name) => array.find((element) => element.name === name)
console.log(findNameInArray(students, 'Bob'))


// .reduce() => return value: tthe single value that results from the reduction.
// 020111. Create a function that returns the sum of all numbers using reduce()
// 402
console.log('20111. ')
let getSumOfAllNumbers = (array) => array.reduce((accumulator, element) => accumulator + element)
console.log(getSumOfAllNumbers(numbers))


// 020112. Create a function that returns the sum of all numbers without using reduce()
// 402
console.log('20112. ')
let getSumOfAllElements = (array) => {
  let result = 0
  array.forEach((element) => result += element)
  return result
}
console.log(getSumOfAllElements(numbers))


// 020113. Create a function that returns the difference of all numbers, using reduce()
//  -400
console.log('20113. ')
let getDifferenceOfAllElements = (array) => array.reduce((prevValue, curValue) => prevValue - curValue) 
console.log(getDifferenceOfAllElements(numbers))


// 020114. Create a function that returns the product of all numbers
// 1819457640
console.log('20114. ')
let getProductOfAllElements = (array) => array.reduce((prevValue, curValue) => prevValue *= curValue)
console.log(getProductOfAllElements(numbers))


// .sort() ==> return value: The sorted array.
// 020115. Create a function that returns an array with numbers sorted in descending order
// [187, 90, 78, 22, 21, 3, 1]
console.log('20115. ')
let Ascending = Symbol('Ascending')
let Descending = Symbol('Descending')
let compareNumbers = (a, b) => a - b

let sorting = (array, direction) => {
  switch (direction) {
    case Ascending:
      array.sort(compareNumbers)
      break

    case Descending:
      array.sort(compareNumbers)
      array.reverse()
      break
    
    default:
      console.log('ordering direction is not defined.')
  }

  return array
}
console.log(sorting(numbers, Descending))


// 020116. Create a function that returns an array with students sorted 
// by ascending 
// [{name:'Bob'},{name:'Albert'},{name:'Claudia'}]

console.log('20116. ')



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

// create a function that returns an array with separate denominations needed to 
// reach the amount passed into the function. Optimize for higher denominations.
// 27.58 => [10, 10, 5, 1, 1, 0.5, 0.05, 0.01, 0.01, 0.01]


// Math
let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

// Round
// 020201. Create a function that rounds any given number passed to the function, 
// removing any decimals
// 	3.14 => 3
// 	15.9 => 16
console.log('20201. ')
let getRoundNumber = (number, decimals) => {
  if (decimals === undefined ) {
    return Math.round(number)
  } else {
    return number.toFixed(decimals)
  }
}
console.log(getRoundNumber(products[0].price))


// 020202. Create a function that returns all products with their prices rounded
// [{name:'bread',price:4},{name:'orange',price:1},n{name:'gum',price:3}]
console.log('20202. ')
let getProductsAfterRounding = (array) => {
  array.forEach((element) => element.price = getRoundNumber(element.price))
  return array
}
getProductsAfterRounding(products).forEach((element) => console.log(element))


// 020203. Create a function that takes 2 numbers as parameters and returns 
// the first number rounded to the number of decimals defined by the second parameter.
console.log('20203. ')
console.log(getRoundNumber(1013.34529, 2))


// Power
// 020204. Create a function that that takes 2 numbers as parameters and returns 
// the first number to the power of the second number.
console.log('20204. ')
let getNumberToPowerOfN = (number, exponentialNumber) => {
  if (exponentialNumber == 0) {
    return 1
  } else {
    return number * getNumberToPowerOfN(number, --exponentialNumber)
  }
}
console.log(getNumberToPowerOfN(2,9))

let getNumber2PowerOfN = (number, n) => Math.pow(number, n)
console.log(getNumber2PowerOfN(2,9))


// Random
// 020205. Create a function that returns a random number between 1 and 10.
console.log('20205. ')
let getRandomNumber = () => Math.floor(Math.random() * 10 + 1)
console.log(getRandomNumber())


// 020206. Create a function that takes a number as parameter and returns 
// a random number between 1 and the parameter.
console.log('20206. ')
let getRandomNumberFromOneToGivenNumber = (givenNumber) => Math.floor(Math.random() * givenNumber + 1)
console.log(getRandomNumber(20))


// Algorithms
let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']


// #020301
// Flip each word in phrase and return a single string
// 'tpircSavaJ si eht tseb'
console.log('#020301')
let getReverseString = (str) => {
  if (str == '') {
    return ''
  } else {
    return getReverseString(str.substr(1)) + str.charAt(0)
  }
}

// let getReverseString = (str) => {
//   var arrayWords = str.split('')
//   arrayWords.reverse()
//   return arrayWords.join('')
// }

let flipWordInSentence = (sentence) => {
  var index = 0
  var result = ''
  var arrayWords = sentence.split(' ')
  
  while (index < arrayWords.length) {
    result += getReverseString(arrayWords[index])
    if (index !== arrayWords.length-1) {
      result += ' '
    }
    index++
  }

  return result
}
console.log(flipWordInSentence(phrase))


// #020302
// Convert the array of prices into the following array of objects. 
// Make sure that the value property is of type number.
console.log('#020302')
let newPrices = []

let separatePrices = (array) => {
  let objPrice = {}

  array.forEach((str) => {
    objPrice['currency'] = str.charAt(0)
    objPrice['value'] = str.substr(1)
    newPrices.push(objPrice)
    console.log(objPrice)
  })
}

separatePrices(prices)
newPrices.forEach((element) => console.log(element.currency, element.value))


// #020303
// From the array names return only the palindromes (a palindrome is a word 
// that reads exactly the same from left to right and backwards).
// ['anna', 'bob']
console.log('#020303')


// #020304
// Create a function that, given any number (positive integer) returns the number 
// in Roman numerals.
// 1 => I
// 2 => II
// 3 => III
// 4 => IV
// 5 => V
// 6 => VI
// 7 => VII
// 8 => VIII
// 9 => IX
// 10 => X
// 11 => XI
// 20 => XX
// 40 => XL
// 50 => L
// 100 => C
// 500 => D
// 1000 => M
console.log('#020304')


// #020305
// Create a function that loops numbers from 0 to 20. For each number, if the number is 
// a multiple of 3, log fizz; if the number is a multiple of 5, log buzz; if the number is 
// a multiple of both 3 and 5, log fizzbuzz; for all other numbers, log the number itself.
console.log('#020305')
let logFizzBuzz = (firstNum, lastNum) => {
  let inc = firstNum
  
  while (inc <= lastNum) {
    if (inc % 15 === 0) {
      console.log('fizzbuzz')
    } else if (inc % 3 == 0) {
      console.log('fizz')
    } else if (inc % 5 == 0) {
      console.log('buzz')
    } else {
      console.log(inc)
    }

    inc++
  }
}
logFizzBuzz(12, 133)

// #020306
// Create a function a that takes 2 numbers as parameters and returns their sum. 
// Create a function b that takes 4 parameters, the first is a function that 
// takes itself 2 parameters, the other 3 are numbers. 
// Call function b and pass as parameters function a and 3 numbers. 
// function b should trigger function a passing as parameters the first 2 numbers, therefore 
// getting their sum, then subtract the last number and return the result.
console.log('#020306')