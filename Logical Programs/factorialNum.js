//  Q - Factorial Number

// const fact = (num) => {
//   if (num === 0 || num === 1) return 1;
//   return num * fact(num - 1);
// };

// console.log(fact(5));

// ---------------------------------------------------------

function factorialNum(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}
let result = factorialNum(5);
console.log(result);
