// Math
let products = [
  { name: 'bread', price: 3.5 },
  { name: 'orange', price: 1.3 },
  { name: 'gum', price: 2.8 }
];

// Round
// 020201. Create a function that rounds any given number passed to the function,
// removing any decimals
// 	3.14 => 3
// 	15.9 => 16
console.log('20201. ');
let getRoundNumber = (number, decimals) => {
  if (decimals === undefined) {
    return Math.round(number);
  } else {
    return number.toFixed(decimals);
  }
};
console.log(getRoundNumber(products[0].price));

// 020202. Create a function that returns all products with their prices rounded
// [{name:'bread',price:4},{name:'orange',price:1},{name:'gum',price:3}]
console.log('20202. ');
let getProductsAfterRounding = array => {
  array.forEach(e => (e.price = getRoundNumber(e.price)));
  return array;
};
console.log(getProductsAfterRounding(products));

// 020203. Create a function that takes 2 numbers as cle and returns
// the first number rounded to the number of decimals defined by the second parameter.
console.log('20203. ');
console.log(getRoundNumber(1013.34529, 2));

// Power
// 020204. Create a function that that takes 2 numbers as parameters and returns
// the first number to the power of the second number.
console.log('20204. ');
let getNumber2PowerOfN = (number, n) => Math.pow(number, n);
console.log(getNumber2PowerOfN(2, 9));

// Random
// 020205. Create a function that returns a random number between 1 and 10.
console.log('20205. ');
let getRandomNumber = () => Math.floor(Math.random() * 10 + 1);
console.log(getRandomNumber());

// 020206. Create a function that takes a number as parameter and returns
// a random number between 1 and the parameter.
console.log('20206. ');
let getRandomNumberFromOneToGivenNumber = givenNumber =>
  Math.floor(Math.random() * givenNumber + 1);
console.log(getRandomNumber(20));
