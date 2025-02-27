let employee = {
  name: "Jenny",
  age: 22,
  city: "Pune",
};

// let student = {};
// student = employee; // Shallow Clone

const clonedObject = Object.assign({}, employee);
console.log(employee);
console.log(clonedObject);
