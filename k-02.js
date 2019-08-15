let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'}, {name:'Bob'}, {name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

// 20101. Create a function that logs each number individually
numbers.forEach(element => console.log(element))

// 20102. Create a function that logs each student's name
students.forEach(element => console.log(element.name))
let logNames = (array) => {
    array.forEach(element => console.log(element.name))
}

for (element in students) { // element == index
    console.log(students[element].name)
}

// 20103. Create a function that adds 1 to each number and returns a new array
// [2, 91, 79, 4, 23, 188, 22]
const addOne = (element) => ++element
let newNumbers = numbers.map(addOne)
console.log(newNumbers)

// 20104. Create a function that returns an array of  all the students' names
// ['Albert', 'Bob', 'Claudia']
const getName = (element) => element.name
console.log(students.map(getName))

// .filter()
// 20105. Create a function that returns an array with only numbers equal to or greater than 22
// [91, 79, 23, 188, 22]
let logFilter = (array) => {
    console.log(array.filter(n => n >= 22))
}

let filterGreater22 = (element) => {
    array.filter(element => element >= 22)
}
console.log(newNumbers.filter(n => n >= 22))

// 20106. Create a function that returns an array with only numbers greater than the parameter passed onto the function
// 70 => [90, 78, 187]
const greaterParameter = (array, value) => {
    return array.filter(n => n > value)
}
console.log(greaterParameter(numbers, 70))


// 20107. Create a function that returns an array with only students whose name is more than 6 characters long
// [{name:'Claudia'}]
let newStudents = students.filter(element => element.name.length > 6)
console.log(newStudents)

// 20108. Create a function that returns an array with only strings from mix
// ['David', 'Frank']
let stringOnly = mix.filter(element => typeof(element) === 'string')
console.log(stringOnly)

// .find()
// 20109. Create a function that returns the first number greater than 100
// 187
console.log(numbers.find(element => element > 100))

// 20110. Create a function that returns the first student whose name is Bob
// {
// 	name: 'Bob'
// }
console.log(students.find(element => element.name === 'Bob'))

// .reduce()
// 20111. Create a function that returns the sum of all numbers using reduce()
// 402
console.log(numbers.reduce((t, i) => t + i))

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

// 20116. Create a function that returns an array with students sorted by ascending length of their names
// [{name:'Bob'},{name:'Albert'},{name:'Claudia'}]
let tempStudent = []
var name = ''

for (element in students) {
    name = students[element].name
    tempStudent.push({})
}

let sortedName = tempStudent.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    }

    if (a.name < b.name) {
      return -1
    }

    // a must be equal to b
    return 0
  })
console.log(tempStudent)

tempStudent.forEach()