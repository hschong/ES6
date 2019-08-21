// Classes
// #020501
class Car {
    constructor (make, model, color) {
        this.make = make
        this.model = model
        this.color = color
    }
}

let buildCar = () => new Car('Benz', 'E300', 'White')
console.log('#020501', buildCar())

  
// #020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

class Employee {
    constructor(name, job) {
        this.name = name
        this.job = job
    }
}

let makeEmployeeInstance = (index) => employee = new Employee(names[index], jobs[index])
let makeEmployeeArray = (names, jobs) => names.map(
    (name, index) => makeEmployeeInstance(index))

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

    hasBlackBelt() {
        return this.getBelt() === 'black' ? true : false
    }

    getIndexOfBelt() {
        return belts.indexOf(this.getBelt())
    }
    
    judge(score) {
        if (score > UPGRADE_SCORE) {
            if (this.hasBlackBelt() === false) {
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

let getRandomNumber = max => Math.floor(Math.random() * max) + 1
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
        this.price = this.price - (this.price * discount / 100)
    }
}

class Receipt {
    constructor(products) {
        this.products = products
    }

    calcTotal() {
        let total = 0
        this.products.forEach(product => total += product.price)
        return total
    }
}

let makeProductListAfterDiscounting = () => fruitNames.map((name, index) => {
    product = new Product(name, prices[index])
    product.applyDiscount(discounts[index])
    return product
})

let logReceipt = ()=> {
    console.log('#020504')
    receipt = new Receipt(makeProductListAfterDiscounting())
    console.log('Receipt: [')
    makeProductListAfterDiscounting().forEach(product => console.log(product))
    console.log(']')
    console.log(`Total: ${receipt.calcTotal()}`)
}

logReceipt()

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