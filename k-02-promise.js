// Promises
// #020601
let brushTeeth=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString() + `: brush teeth after ${sec} second(s).`)
        }, sec * 1000)
    })
}

let getUp=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString() + `: getUp ${sec} second(s).`)
        }, sec*1000)
    })
}

let haveBreakfast=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString() + `: have breakfast after ${sec} second(s). Time: `)
        }, sec*1000)
    })
}

let haveShower=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString() + `: take shower after ${sec} second(s).`)
        }, sec*1000)
    })
}

// async let toDoInMorning=()=>{
async function toDoInMorning() {
    console.log('#020601 <===>')
    console.log(new Date().toISOString())
    await getUp(1).then(result=>console.log(result))
    await haveShower(2).then(result=>console.log(result))
    await haveBreakfast(2).then(result=>console.log(result))
    await brushTeeth(1).then(result=>console.log(result))
}

toDoInMorning()


// #020602
// Create a function makeCoffee that resolves with coffee after 10 seconds.
// Create a function makeEggs that resolves with eggs after 5 seconds.
// Create a function makeToast that resolves with toast after 6 seconds.
// Create a function makeBacon that resolves with bacon after 8 seconds.
// Call all the functions at once and when all have resolved, log a string containing an array with all the responses.
// Breakfast is ready: ['coffee', 'eggs', 'toast', 'bacon']


// #020603
// Create 3 racing horses: "Speedy", "Jackpot" and "Red". Each one will finish the race and resolve with its name after a random time between 1 and 4 seconds.
// Start the race and log the winning horse:
// The winner is Jackpot!