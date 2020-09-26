// Logical AND(&&) and Logical OR (||)

let cachedName = null;
let student = {
  name: 'Heeseok',
  age: 20,
  details: {
    favFood: 'steak',
    car: 'Benz',
  },
};

// caching values (when falsy values are invalid):
const name = cachedName || (cachedName = 'default');

// This is useful for checking for null objects before accessing their attributes:
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

// ES6: rest parameters should be preferred.
let add = (...args) => {
  let sum = 0;
  for (let value of args) {
    sum += value;
  }

  return sum;
};

let sum = 0;
sum = add(3, 4, 5, 6);
sum = add.apply(null, [2, 3, 4, 5]);
console.log(sum);

// prototype
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

// Dynamic binding prototype
Person.prototype.upperCaseFullName = function () {
  return (this.first + ' ' + this.last).toUpperCase();
};

console.log(a1.fullName());
console.log(a1.upperCaseFullName());
