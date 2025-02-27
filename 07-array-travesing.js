const array = [2, 4, 5, 6, 9, 1];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

console.log(`======= Sum the array elements ===========`);
let sum = 0; // 11
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  sum = sum + element; // 6 + 5
  console.log(element);
}
console.log(` Sum of an array: ${sum}`);

console.log(`======= Even numbers from the array ===========`);
let arrayNum = [7, 2, 5, 8, 6, 4, 11];
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  if (element % 2 == 0) {
    console.log(element);
  }
}
console.log("======== for of loop==========");
let arrays = [7, 2, 5, 8, 6, 4, 11];
for (const element of arrays) {
  console.log(element);
}

console.log(`======== Array reverse traversing=============`);
let arrayNumbers = [7, 2, 5, 8, 6, 4, 11];
for (let index = arrayNumbers.length - 1; index >= 0; index--) {
  const element = arrayNumbers[index];
  console.log(element);
}

console.log("=======join() =======");

const result = arrayNumbers.join(", ");
console.log(result);

console.log("=======concat() =======");
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];

let res = array1.concat(array2);
console.log(`Concat array is: ${res}`);
