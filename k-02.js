let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'}, {name:'Bob'}, {name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

// .forEach()
// return value: undefined
// 20101. Create a function that logs each number individually
console.log('20101. ')
let logElements = (array) => array.forEach((element) => console.log(element))
logElements(numbers)

// 20102. Create a function that logs each student's name
console.log('20102. ')
let logNames = (array) => array.forEach((element) => console.log(element.name))
logNames(students)


// .map()
// return value: a new array
// 20103. Create a function that adds 1 to each number and returns a new array
// [2, 91, 79, 4, 23, 188, 22]
console.log('20103. ')
let plusOne = (element) => ++element
let makeNewArray = (array, func) => array.map(func)
let newNumbers = makeNewArray(numbers, plusOne)
console.log(newNumbers)

// 20104. Create a function that returns an array of  all the students' names
// ['Albert', 'Bob', 'Claudia']
console.log('20104. ')
let getName = (element) => element.name
let studentNames = makeNewArray(students, getName)
console.log(studentNames)


// .filter()
// return value: a new array
// 20105. Create a function that returns an array with only numbers equal to or greater than 22
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

// 20106. Create a function that returns an array with only numbers greater than 
// the parameter passed onto the function
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

// 20107. Create a function that returns an array with only students 
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

// 20108. Create a function that returns an array with only strings from mix
// ['David', 'Frank']
console.log('20108. ')
let getStringOnly = (array) => array.filter((element) => typeof(element) === 'string')
let stringOnly = getStringOnly(mix)
console.log(stringOnly)


// .find()
// return value: first element
// 20109. Create a function that returns the first number greater than 100
// 187
console.log('20109. ')
let find1stNumberGreaterThanGivenNumber = (array, givenNumber) => array.find((element) => element > givenNumber)
console.log(find1stNumberGreaterThanGivenNumber(numbers, 100))

// 20110. Create a function that returns the first student whose name is Bob
// {
// 	name: 'Bob'
// }
console.log('20110. ')
let findNameInArray = (array, name) => array.find((element) => element.name === name)
console.log(findNameInArray(students, 'Bob'))

// .reduce()
// 20111. Create a function that returns the sum of all numbers using reduce()
// 402
console.log('20111. ')
let getSumOfAllNumbers = (array) => array.reduce((accumulator, element) => accumulator + element)
console.log(getSumOfAllNumbers(numbers))

// 20112. Create a function that returns the sum of all numbers without using reduce()
// 402
console.log('20112. ')
let getSumOfAllElements = (array) => {
  let result = 0
  array.forEach((element) => result += element)
  return result
}
console.log(getSumOfAllElements(numbers))

// 20113. Create a function that returns the difference of all numbers, using reduce()
//  -400
console.log('20113. ')
let getDifferenceOfAllElements = (array) => array.reduce((prevValue, curValue) => prevValue - curValue) 
console.log(getDifferenceOfAllElements(numbers))

// 20114. Create a function that returns the product of all numbers
// 1819457640
console.log('20114. ')
let getProductOfAllElements = (array) => array.reduce((prevValue, curValue) => prevValue *= curValue)
console.log(getProductOfAllElements(numbers))

// .sort()
// 20115. Create a function that returns an array with numbers sorted in descending order
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

// 20116. Create a function that returns an array with students sorted by ascending 
// length of their names
// [{name:'Bob'},{name:'Albert'},{name:'Claudia'}]
console.log('20116. ')

// Math
let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

// Round
// 20201. Create a function that rounds any given number passed to the function, 
// removing any decimals
// 	3.14 => 3
// 	15.9 => 16
console.log('20201. ')
let getRoundNumber = (number) => Math.round(number)
let logRoundNumber = (array) => array.forEach((element) => Math.round(element))

// 20202. Create a function that returns all products with their prices rounded
// [{name:'bread',price:4},{name:'orange',price:1},{name:'gum',price:3}]
console.log('20202. ')
let productAfterRounding = (array) => {
  array.forEach((element) => element.price = getRoundNumber(element.price))
  return array
}
console.log(productAfterRounding(products))

// 20203. Create a function that takes 2 numbers as parameters and returns 
// the first number rounded to the number of decimals defined by the second parameter.
console.log('20203. ')
let round2precision = (number, precision) => {
  remainder = number % precision
  if ((remainder/precision) >= 0.5) {
    number++
  } else {
    number--
  }

  return number
}
console.log(round2precision(10, 7))

// Power
// 20204. Create a function that that takes 2 numbers as parameters and returns 
// the first number to the power of the second number.
console.log('20204. ')
let getPower = (number, exponentialNumber) => {
  if (exponentialNumber == 0) {
    return 1
  } else {
    return number * getPower(number, --exponentialNumber)
  }
}
console.log(getPower(2,9))

// Random
// 20205. Create a function that returns a random number between 1 and 10.
console.log('20205. ')
let getRandomNumber = () => Math.floor(Math.random() * 10 + 1)
console.log(getRandomNumber())

// 20206. Create a function that takes a number as parameter and returns 
// a random number between 1 and the parameter.
console.log('20206. ')
let getRandomNumberFromOneToGivenNumber = (givenNumber) => Math.floor(Math.random() * givenNumber + 1)
console.log(getRandomNumber(20))