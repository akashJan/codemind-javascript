console.log("-----task 1----");

let message = () => {
  console.log("Good Morning, Today is Wednesday");
};
message();

console.log("-----task 2----");
let mul = (num1, num2, num3 = 1) => {
  let result1 = num1 * num2 * num3;
  console.log(`Multiplication of 5,5,2 is: ${result1} `);
};
mul(5, 5, 2);

let mull = (num1, num2, num3 = 1) => {
  let result2 = num1 * num2 * num3;
  console.log(`Multiplication of 5,5 & default value 1 is: ${result2} `);
};

mull(10, 4);

console.log("-----task 3----");

let add = (n1, n2, n3, n4, n5) => {
  let sum = n1 + n2 + n3 + n4 + n5;
  return sum;
};

let addition = add(100, 100, 200, 349, 756);

console.log(`Addition of the given value is: ${addition}`);

let strConcat = add("I am", "Learning", "ES6", "Feature", "In depth");

console.log(`String values gets concat to each other: ${strConcat}`);
