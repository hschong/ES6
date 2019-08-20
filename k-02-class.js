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

let makeEmployeeInstance = (index) => {
    let employee = new Employee(names[index], jobs[index])
    return employee
}

let makeEmployeeArray = (names, jobs) => {
    return names.map((name, index) => {
        return makeEmployeeInstance(index)
    })
}

console.log('#020502', makeEmployeeArray(names, jobs))


// #020503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']
class Karateka {
    constructor(name) {
        this.name = name
        this.belt = belts[0]
    }

    getBelt() {
        return this.belt
    }

    setBelt(index) {
        this.belt = belts[index]
    }

    isYourBeltBlack() {
        return this.getBelt() === 'black' ? true : false
    }

    getIndexOfBelt() {
        return belts.indexOf(this.getBelt())
    }
    
    judge(score) {
        if (score > UPGRADE_SCORE) {
            if (this.isYourBeltBlack() === false) {
                this.increaseRank(this.getIndexOfBelt())
            }
        }
    }

    increaseRank(index) {
        this.setBelt(++index)
    }
}

const UPGRADE_SCORE = 8
const MAX_SCORE = 10
const INTERVAL_SECONDS = 1000
const MAX_FIGHT_SECONDS = 20000

let getRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber) + 1
}

let getScore = () => getRandomNumber(MAX_SCORE)

let logResult = () => {
    let score = getScore()
    fighter.judge(score)
    console.log('Score: ', score)
    console.log(fighter)
} 

let fight = (ins) => {
    let intervalID = setInterval(logResult, INTERVAL_SECONDS)

    setTimeout(() => {
        clearInterval(intervalID)
    }, MAX_FIGHT_SECONDS)
}

let fighter = new Karateka('Heeseok')
console.log('#020503', fighter)
fight(fighter)


// #020504
let fruitNames = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    applyDiscount(discount) {
        return this.price = this.price - (this.price * discount / 100)
    }
}

class Receipt {
    constructor(products) {
        this.products = products
    }

    calcTotal(products) {
        return products.reduce((total, element) => total + element.price)
    }
}

let newProductAfterDiscount = (name, index) => {
    product = new Product(name, prices[index])
    product.price = product.applyDiscount(discounts[index])
    return product
}

let getReceipt = (fruitNames, prices, discounts) => {
    return receipt = fruitNames.map((name, index) => {
        return newProductAfterDiscount(name, index)
    })
}

getReceipt(fruitNames, prices, discounts).forEach(element => {
    console.log(element)
})

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