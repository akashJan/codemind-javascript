// function isPrime(num) {
//   for (let index = 2; index < num; index++) {
//     if (num % index == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// var result = isPrime(7);

// console.log(`Is 7 prime number: ${result}`);

// var result = isPrime(15);

// console.log(`Is 15 prime number: ${result}`);

let array = [3, 9, 7, 6, 19, 29, 53];
let primeCount = 0;
let numberCount = [];

function isPrime(num) {
  if (num < 2) return false;
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }

  return true;
}

for (const element of array) {
  if (isPrime(element)) {
    primeCount++;
    numberCount.push(element);
  }
}

console.log(`Prime Numbers: ${numberCount}`);
console.log(`Total Count: ${primeCount}`);
