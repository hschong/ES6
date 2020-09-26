// Logical AND(&&) and Logical OR (||)
// However, the && and || operators actually return the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

let cachedName = null;

// result(L) = L(T) || R
// result(R) = L(F) || R
// caching values (when falsy values are invalid):
const name = cachedName || (cachedName = 'default');

// result(R) = L(T) && R
// result(L) = L(F) && R
// This is useful for checking for null objects before accessing their attributes:
let student = {
  name: 'Heeseok',
  age: 20,
  details: {
    favFood: 'steak',
    car: 'Benz',
  },
};
const defaultName = student && student.name;

// for in
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];
//     console.log(element);
//   }
// }

// for of
// for (const iterator of object) {
//   console.log(iterator);
// }

// using arguments
function add() {
  let sum = 0;
  let length = arguments.length;
  for (let i = 0; i < length; i++) {
    console.log(arguments[i]);
    sum += arguments[i];
  }

  return sum;
}

// Note: If you're writing ES6 compatible code, then rest parameters should be preferred.
let add1 = (...args) => {
  let sum = 0;
  for (let value of args) {
    sum += value;
  }

  return sum;
};

let sum = 0;
sum = add(3, 4, 5, 6);
sum = add1(5, 6, 7, 8);
sum = add1.apply(null, [2, 3, 4, 5]);
console.log(sum);

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function () {
  return this.first + ' ' + this.last;
};

Person.prototype.reverseFullName = function () {
  return this.last + ', ' + this.first;
};

let a1 = new Person('Heeseok', 'Chong');

Person.prototype.upperCaseFullName = function () {
  return (this.first + ' ' + this.last).toUpperCase();
};

console.log(a1.fullName());
console.log(a1.upperCaseFullName());
