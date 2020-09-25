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
const name = student && student.name();

// for in
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
    console.log(element);
  }
}

// for of
for (const iterator of object) {
  console.log(iterator);
}
