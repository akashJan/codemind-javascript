let add = () => {
  console.log("Arrow function");
};
add();

// AF with arguments and no return value

let addition = (p1, p2 = 0) => {
  console.log(`Addition: ${p1 + p2}`);
};

addition(10, 20);
addition(10);

// AF with argument and return value

let square = (num) => {
  let result = num * num;
  return result;
};

let squareResult = square(5);
console.log(squareResult);
