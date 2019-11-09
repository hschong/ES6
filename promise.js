// Promises
// #020601
let brushTeeth = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020601' +
          `: brush teeth after ${sec} second(s).`
      );
    }, sec * 1000);
  });
};

let getUp = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020601' +
          `: getUp after ${sec} second(s).`
      );
    }, sec * 1000);
  });
};

let haveBreakfast = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020601' +
          `: have breakfast after ${sec} second(s).`
      );
    }, sec * 1000);
  });
};

let haveShower = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020601' +
          `: take shower after ${sec} second(s).`
      );
    }, sec * 1000);
  });
};

async function toDoInMorning() {
  console.log(new Date().toString() + ' <===> #020601' + ': toDoInMorning()');
  await getUp(1).then(result => console.log(result));
  await haveShower(2).then(result => console.log(result));
  await haveBreakfast(2).then(result => console.log(result));
  await brushTeeth(1).then(result => console.log(result));
}

// #020602
let makeCoffee = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020602' +
          `: make coffee after ${sec} second(s)`
      );
    }, sec * 1000);
  });
};

let makeEggs = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020602' +
          `: make eggs after ${sec} second(s)`
      );
    }, sec * 1000);
  });
};

let makeToast = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020602' +
          `: make toast after ${sec} second(s)`
      );
    }, sec * 1000);
  });
};

let makeBacon = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        new Date().toString() +
          ' <===> #020602' +
          `: make bacon after ${sec} second(s)`
      );
    }, sec * 1000);
  });
};

let makeBreakfast = () => {
  let responses = [];
  responses.push(makeCoffee(10));
  responses.push(makeEggs(5));
  responses.push(makeToast(6));
  responses.push(makeBacon(8));
  console.log(new Date().toString() + ' <===> #020602' + ': makeBreakfast()');
  return Promise.all(responses).then(result => console.log(responses));
};

// #020603
let startSpeedy = sec => {
  return new Promise((resolve, reject) => {
    console.log(`#020603 <===> Speedy is ${sec} second(s).`);
    setTimeout(() => {
      resolve(
        new Date().toString() + ' <===> #020603' + `: The winner is Speedy!`
      );
    }, sec * 1000);
  });
};

let startJackpot = sec => {
  return new Promise((resolve, reject) => {
    console.log(`#020603 <===> Jackpot is ${sec} second(s).`);
    setTimeout(() => {
      resolve(
        new Date().toString() + ' <===> #020603' + `: The winner is Jackpot!`
      );
    }, sec * 1000);
  });
};

let startRed = sec => {
  return new Promise((resolve, reject) => {
    console.log(`#020603 <===> Red is ${sec} second(s).`);
    setTimeout(() => {
      resolve(
        new Date().toString() + ' <===> #020603' + `: The winner is Red!`
      );
    }, sec * 1000);
  });
};

let getRandomNumber = () => Math.random() * 4 + 1;
let race = () => {
  let responses = [];
  console.log(new Date().toString() + ' <===> #020603' + ': race()');
  responses.push(startSpeedy(getRandomNumber()));
  responses.push(startJackpot(getRandomNumber()));
  responses.push(startRed(getRandomNumber()));
  return Promise.race(responses).then(result => console.log(result));
};

async function startMyAsyncFunc() {
  await toDoInMorning();
  await makeBreakfast();
  await race();
  await toDoInMorning();
}

// let startMyAsyncFunc=()=>toDoInMorning().then(result=>makeBreakfast().then(()=>race()))
startMyAsyncFunc();

let a = a => {
  a + 1;
};
