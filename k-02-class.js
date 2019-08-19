// Classes
// #020501
// 1. Create a class Car
// 2. Create a buildCar function that takes make, model and color and returns 
// a new instance of Car
class Car {
    constructor (make, model, color) {
        this.make = make
        this.model = model
        this.color = color
    }
}

let buildCar = () => {
    return new Car('Benz', 'E300', 'White')
}
console.log('#020501', buildCar())

  
// #020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']
// [
//   {name:'Alice', job:'Accountant'},
//   {name:'Bernard', job:'Biz Manager'},
//   {name:'Catherine', job:'Cleaner'},
//   {name:'David', job:'Director'}
// ]

class Employee {
    constructor(name, job) {
        this.name = name
        this.job = job
    }
}

let makeEmployeeArray = (names, jobs) => {
    return names.map((name, index) => {
        employee = new Employee(name, jobs[index])
    })
}

console.log('#020502', makeEmployeeArray(names, jobs))


// #020503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']
// 1. Create a class Karateka, that takes a name as parameter and has the belt 
// property set to the first belt in belts by default.
// 2. Karateka should also have an increaseRank function that upgrades the belt by 
// 1 step (from the array belts)
class Karateka {
    constructor(name) {
        this.belt = belts[0]
    }

    getBelt() {
        return this.belt
    }

    setBelt(index) {
        this.belt = belts[index]
    }

    isYourBeltUpgradable() {
        if (this.getBelt() == 'black') {
            return false
        } else {
            return true
        }
    }

    getIndexOfBelt() {
        curBelt = this.getBelt()
        index = belts.indexOf(curBelt)
        return index
    }

    increaseRank(index) {
        this.setBelt(++index)
    }
}


let fight = (ins) => {
    const start = 1
    const max = 20
    setInterval()
    let score = Math.floor(Math.random()*max) + 1
}
// 3. Create an instance of Karateka with your name
// 4. Create a fight function that takes your instance of Karateka as a parameter
// Within the fight function, every second, for a maximum of 20 seconds, draw 
// a random score between 1 and 10
// 5. If the score is higher than 8, upgrade the belt of your Karateka instance, 
// by calling the increaseRank function 
// 6. Every second, within the fight, log the score and the instance of Karateka

// score: 2
// {name: 'Tony', belt: 'white'}
// score: 4
// {name: 'Tony', belt: 'white'}
// score: 1
// {name: 'Tony', belt: 'white'}
// score: 10
// {name: 'Tony', belt: 'yellow'}
// score: 6
// {name: 'Tony', belt: 'yellow'}
// score: 9
// {name: 'Tony', belt: 'orange'}
// score: 10
// {name: 'Tony', belt: 'green'}
// score: 2
// {name: 'Tony', belt: 'green'}
// score: 5
// {name: 'Tony', belt: 'green'}
// score: 4
// {name: 'Tony', belt: 'green'}
// score: 3
// {name: 'Tony', belt: 'green'}
// score: 10
// {name: 'Tony', belt: 'blue'}
// score: 2
// {name: 'Tony', belt: 'blue'}
// score: 10
// {name: 'Tony', belt: 'brown'}
// score: 9
// {name: 'Tony', belt: 'black'}
// score: 5
// {name: 'Tony', belt: 'black'}
// score: 5
// {name: 'Tony', belt: 'black'}
// score: 2
// {name: 'Tony', belt: 'black'}
// score: 7
// {name: 'Tony', belt: 'black'}
// score: 8
// {name: 'Tony', belt: 'black'}
  
  
  // #020504
  let fruitNames = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
  let prices = [20, 12, 24, 53, 32, 15]
  let discounts = [0, 0, 10, 25, 0, 5]
  // 1. Create a class Product with parameters name and price
  // 2. Also add the function applyDiscount() inside Product that takes a parameter 
  // discount and applies the discount to the Product's price (discount should be 
  // a number, where 10 represents 10% discount)
  // 3. Create a class Receipt that takes an array of objects called products as a parameter
  // 4. Also add the function calcTotal() inside Receipt that takes products and returns 
  // the sum of the products' prices.
  // 5. Create a function getReceipt() that takes names, prices and discounts as parameters, then
  //   i.    Creates objects with name and price using the Product class as factory
  //   ii.   Applies the discounts using the applyDiscount() function within products
  //   iii.  Creates a receipt using the Receipt class
  //   iv.   logs the receipt and the total using the calcTotal function within Receipt
  
  //   Receipt: [
  //   {name: 'apples', price: 20},
  //   {name: 'bananas', price: 12},
  //   {name: 'bread', price: 21.6},
  //   {name: 'cookies', price: 39.75},
  //   {name: 'broccoli', price: 32},
  //   {name: 'onions', price: 14.25}
  // ]
  // Total: 139.6
  
  
  // 🤓 Advanced
  // Log the receipt in this format:
  
  // ----------------------
  // | apples   |  $20.00 |
  // | bananas  |  $12.00 |
  // | bread    |  $21.60 |
  // | cookies  |  $39.75 |
  // | broccoli |  $32.00 |
  // | onions   |  $14.25 |
  // ----------------------
  // | Total    | $139.60 |
  // ----------------------