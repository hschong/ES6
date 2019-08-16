let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'}, {name:'Bob'}, {name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

// .forEach()
// 20101. Create a function that logs each number individually
let logElement = (array) => array.forEach(element => console.log(element))
logElement(numbers)

// 20102. Create a function that logs each student's name
let logNames = (array) => array.forEach(element => console.log(element.name))
logNames(students)


// .map()
// 20103. Create a function that adds 1 to each number and returns a new array
// [2, 91, 79, 4, 23, 188, 22]
let newNumbers = []
let addOne = (array) => array.map((element) => newNumbers.push(++element))
addOne(numbers)
newNumbers.forEach((element) => console.log(element))

// 20104. Create a function that returns an array of  all the students' names
// ['Albert', 'Bob', 'Claudia']
let studentName = []
let getName = (array) => array.forEach((element) => studentName.push(element.name))
getName(students)
console.log(studentName)


// .filter()
// 20105. Create a function that returns an array with only numbers equal to or greater than 22
// [91, 79, 23, 188, 22]
let filterGreater22 = (array) => array.filter(element => element >= 22)
console.log(filterGreater22(newNumbers))

// 20106. Create a function that returns an array with only numbers greater than 
// the parameter passed onto the function
// 70 => [90, 78, 187]
const greaterParameter = (array, value) => array.filter(n => n > value)
console.log(greaterParameter(numbers, 70))

// 20107. Create a function that returns an array with only students 
// whose name is more than 6 characters long
// [{name:'Claudia'}]
let nameGreater6 = (array) => array.filter(element => {
  if (element.name.length > 6) {
    console.log(element)
  }
})
nameGreater6(students)

// 20108. Create a function that returns an array with only strings from mix
// ['David', 'Frank']
let getStringOnly = (array) => array.filter(element => typeof(element) === 'string')
console.log(getStringOnly(mix))


// .find()
// 20109. Create a function that returns the first number greater than 100
// 187
let getGreater100 = (array) => array.find((element) => element > 100)
console.log(getGreater100(numbers))

// 20110. Create a function that returns the first student whose name is Bob
// {
// 	name: 'Bob'
// }
let getFirstNameInArray = (array, name) => array.find((element) => element.name === name)
console.log(getFirstNameInArray(students, 'Bob'))

// .reduce()
// 20111. Create a function that returns the sum of all numbers using reduce()
// 402
let getSumOfAllNumbers = (array) => array.reduce((sum, element) => sum + element)
console.log(getSumOfAllNumbers(numbers))

// 20112. Create a function that returns the sum of all numbers without using reduce()
// 402
let forInSum = 0
for (index in numbers) {
    forInSum += numbers[index]
}
console.log(forInSum)

let forEachSum = 0
numbers.forEach(element => forEachSum += element)
console.log(forEachSum)

// 20113. Create a function that returns the difference of all numbers, using reduce()
//  -400
console.log(numbers.reduce((t,i) => t - i))

// 20114. Create a function that returns the product of all numbers
// 1819457640
console.log(numbers.reduce((t, i) => t * i))

// .sort()
// 20115. Create a function that returns an array with numbers sorted in descending order
// [187, 90, 78, 22, 21, 3, 1]
let compareNumbers = (a, b) => a - b
let sortedNumbers = numbers.sort(compareNumbers)
console.log(sortedNumbers.reverse())

// 20116. Create a function that returns an array with students sorted by ascending 
// length of their names
// [{name:'Bob'},{name:'Albert'},{name:'Claudia'}]


// Math
let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]

// Round
// 20201. Create a function that rounds any given number passed to the function, 
// removing any decimals
// 	3.14 => 3
// 	15.9 => 16
let getRoundNumber = (number) => Math.round(number)
let logRoundNumber = (array) => array.forEach((element) => Math.round(element))

// 20202. Create a function that returns all products with their prices rounded
// [{name:'bread',price:4},{name:'orange',price:1},{name:'gum',price:3}]
let productAfterRounding = (array) => {
  array.forEach((element) => element.price = getRoundNumber(element.price))
  return array
}
console.log(productAfterRounding(products))

// 20203. Create a function that takes 2 numbers as parameters and returns 
// the first number rounded to the number of decimals defined by the second parameter.
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
let getRandomNumber = () => Math.floor(Math.random() * 10 + 1)
console.log(getRandomNumber())

// 20206. Create a function that takes a number as parameter and returns 
// a random number between 1 and the parameter.
let getRandomNumberFromOneToGivenNumber = (givenNumber) => Math.floor(Math.random() * givenNumber + 1)
console.log(getRandomNumber(20))