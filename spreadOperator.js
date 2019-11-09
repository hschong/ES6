// Spread operator
const objA = {
  name: 'Heeseok',
  favFood: 'Shrimp'
};

const objB = {
  password: '12345'
};

class ObjectUtilities {
  // mergeObjects: Merge two objects. Return an object.
  static mergeObjects = (objA, objB) => ({ ...objA, ...objB }); // spread operator

  // removePassword: Remove the 'password' key on an object. Return an object.
  static removePassword = ({ password, ...rest }) => rest;

  // getOnlyValues: Returns an array of all the values inside of an object.
  static getOnlyValues = obj => Object.values(obj);

  // getOnlyKeys: Returns an array of all the properties inside of an object.
  static getOnlyProperties = obj => Object.keys(obj);

  static freezeObj = obj => Object.freeze(obj);
}

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = 'Hello!'; // This should show an error
