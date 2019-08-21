// Promises
// #020601
let brushTeeth=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020601' +  `: brush teeth after ${sec} second(s).`)
        }, sec * 1000)
    })
}

let getUp=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020601' +  `: getUp after ${sec} second(s).`)
        }, sec*1000)
    })
}

let haveBreakfast=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020601' + `: have breakfast after ${sec} second(s).`)
        }, sec*1000)
    })
}

let haveShower=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() +  ' <===> #020601' + `: take shower after ${sec} second(s).`)
        }, sec*1000)
    })
}

async function toDoInMorning() {
    console.log(new Date().toString() + ' <===> #020601' + ': toDoInMorning()')
    await getUp(1).then(result=>console.log(result))
    await haveShower(2).then(result=>console.log(result))
    await haveBreakfast(2).then(result=>console.log(result))
    await brushTeeth(1).then(result=>console.log(result))
}

// #020602
let makeCoffee=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020602' + `: make coffee after ${sec} second(s)`)
        }, sec*1000)
    })
}

let makeEggs=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020602' + `: make eggs after ${sec} second(s)`)
        }, sec*1000)
    })
} 

let makeToast=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020602' + `: make toast after ${sec} second(s)`)
        }, sec*1000)
    })
}

let makeBacon=(sec)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020602' + `: make bacon after ${sec} second(s)`)
        }, sec*1000);
    })
}

let makeBreakfast=()=>{
    let responses = []
    responses.push(makeCoffee(10))
    responses.push(makeEggs(5))
    responses.push(makeToast(6))
    responses.push(makeBacon(8))
    console.log(new Date().toString() + ' <===> #020602' + ': makeBreakfast()')
    Promise.all(responses).then(result=>console.log(responses))
}


// #020603
let startSpeedy=(sec)=>{
    return new Promise((resolve, reject)=>{
        console.log(`#020603 <===> Speedy is ${sec} second(s).`)
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020603' + `: The winner is Speedy!`)
        }, sec*1000)
    })
}

let startJackpot=(sec)=>{
    return new Promise((resolve, reject)=>{
        console.log(`#020603 <===> Jackpot is ${sec} second(s).`)
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020603' + `: The winner is Jackpot!`)
        }, sec*1000)
    })
}

let startRed=(sec)=>{
    return new Promise((resolve, reject)=>{
        console.log(`#020603 <===> Red is ${sec} second(s).`)
        setTimeout(()=>{
            resolve(new Date().toString() + ' <===> #020603' + `: The winner is Red!`)
        }, sec*1000)
    })
}

let getRandomNumber=()=>Math.random()*4+1
let race=()=>{
    let responses = []
    console.log(new Date().toString() + ' <===> #020603' + ': race()')
    responses.push(startSpeedy(getRandomNumber()))
    responses.push(startJackpot(getRandomNumber()))
    responses.push(startRed(getRandomNumber()))
    Promise.race(responses).then(result=>console.log(result))
}

async function startMyAsyncFunc() {
    await toDoInMorning()
    await makeBreakfast()
    await race()
}

startMyAsyncFunc()
// 01:01:56 GMT+0700 (Indochina Time) <===> #020601: getUp after 1 second(s).
// 01:01:58 GMT+0700 (Indochina Time) <===> #020601: take shower after 2 second(s).
// 01:02:00 GMT+0700 (Indochina Time) <===> #020601: have breakfast after 2 second(s).
// 01:01:55 GMT+0700 (Indochina Time) <===> #020601: toDoInMorning()
// 01:02:01 GMT+0700 (Indochina Time) <===> #020601: brush teeth after 1 second(s).
// 01:02:01 GMT+0700 (Indochina Time) <===> #020602: makeBreakfast()
// 01:02:01 GMT+0700 (Indochina Time) <===> #020603: race()
// #020603 <===> Speedy is 1.0607399255152226 second(s).
// #020603 <===> Jackpot is 3.9184682542379115 second(s).
// #020603 <===> Red is 2.1645235668818312 second(s).
// 01:02:02 GMT+0700 (Indochina Time) <===> #020603: The winner is Speedy!
// [ Promise {
//     '01:02:11 GMT+0700 (Indochina Time) <===> #020602: make coffee after 10 second(s)' },
//   Promise {
//     '01:02:06 GMT+0700 (Indochina Time) <===> #020602: make eggs after 5 second(s)' },
//   Promise {
//     '01:02:07 GMT+0700 (Indochina Time) <===> #020602: make toast after 6 second(s)' },
//   Promise {
//     '01:02:09 GMT+0700 (Indochina Time) <===> #020602: make bacon after 8 second(s)' } ]