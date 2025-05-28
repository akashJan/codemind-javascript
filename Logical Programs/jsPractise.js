// let age = "51";
// let validAge = "51";

// age = age + 1; // directly added to the string means concat
// validAge++; // convert to the number and display

// console.log(age);
// console.log(validAge);

// ---------------------------------------------------------

// console.log(+false);
// console.log(!"js");

// ---------------------------------------------------------
// Q1 - Find the sum and average numbers in array

// let numbersToCalculate = [34, 45, 45, 33];

// function calculateSumAverage(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
//   let average = sum / numbers.length;

//   return average;
// }

// let value = calculateSumAverage(numbersToCalculate);

// console.log(value);

// ---------------------------------------------------------

//  Q2 - bubble sort
// let arr = [2, 6, 4, 8];

// let sortedArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// console.log(`Sorted array is ${sortedArray(arr)}`);
// ---------------------------------------------------------

//  Q3 - Largest Number of array

// function largestNum(arr) {
//   let max = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }
//   return arr[max];
// }

// console.log(largestNum([1, 2, 8, 4, 5]));
// ---------------------------------------------------------

//  Q4 - Shortest number in array
function shortestNum(arr) {
  if (arr.length == 0) return undefined;
  let short = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < short) {
      short = arr[i];
    }
  }
  return short;
}
console.log(shortestNum([1, 2, 8, 4, 5]));
console.log(shortestNum([7, 3, 9, -2, 4]));

// ---------------------------------------------------------

//  Q5 - Find Two MaxNumber

function findTwoMaxNumbers(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  if (secondMax === -Infinity) {
    return "No second largest number found (all values may be the same).";
  }

  return { max, secondMax };
}
// 🔍 Example usage:
console.log(findTwoMaxNumbers([3, 5, 1, 9, 7])); // { max: 9, secondMax: 7 }
console.log(findTwoMaxNumbers([10, 10, 5])); // { max: 10, secondMax: 5 }
console.log(findTwoMaxNumbers([4])); // "Array must contain at least two elements."
console.log(findTwoMaxNumbers([8, 8, 8])); // "No second largest number found..."

// ---------------------------------------------------------

//  Q6 - Arrange 0 & 1.  Used Two Pointers (Efficient - O(n)):

// function arrangeZeroAndOne(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] === 1 && arr[right] === 0) {
//       // swap 1 on left with 0 on right
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//     if (arr[left] === 0) left++;
//     if (arr[right] === 1) right--;
//   }

//   return arr;
// }

// const arr1 = [1, 0, 1, 0, 1, 0, 0, 1];
// console.log(arrangeZeroAndOne(arr1)); // Output: [0, 0, 0, 0, 1, 1, 1, 1]

//  Simpler Alternative (Count Method):

// function arrangeZeroAndOne(arr) {
//   const zeroCount = arr.filter((x) => x === 0).length;
//   const oneCount = arr.length - zeroCount;

//   return [...Array(zeroCount).fill(0), ...Array(oneCount).fill(1)];
// }

// ---------------------------------------------------------
//  Q7 - Inverted Pattern.js

// Number of rows
let n = 5;
// Outer loop for number of rows
for (let i = n; i >= 1; i--) {
  let pattern = "";
  // Inner loop for number of columns (stars)
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// ---------------------------------------------------------

//  Q -

// ---------------------------------------------------------

//  Q -

// ---------------------------------------------------------

//  Q -

// ---------------------------------------------------------

//  Q -

// ---------------------------------------------------------

//  Q -

// ---------------------------------------------------------

//  Q -
