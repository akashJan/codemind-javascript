let arrayNum = [10, 20, 30, 40, 20, 50];
console.log(arrayNum);
console.log(`Array length : ${arrayNum.length}`);

const elementAtIndex2 = arrayNum[2];
console.log(`Element at index 2: ${elementAtIndex2}`);

arrayNum[4] = 60;
console.log(`After update`);
console.log(arrayNum);

arrayNum.push(100);
arrayNum.unshift(200);
console.log(arrayNum);

console.log(`pop and shift methods`);

const array = [10, 20, 30, 40, 20, 50];
console.log(array);
array.pop();
array.shift();
console.log(array);

console.log(`====== splice() ===========`);

const arrayOne = [20, 30, 40, 50, 60];
console.log(arrayOne);
const spliceAfter2 = arrayOne.splice(2);
console.log(spliceAfter2);
console.log(arrayOne);

console.log(`====================`);
const arrayTwo = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayTwo);
const deletedElements = arrayTwo.splice(3, 2);
console.log(deletedElements);
console.log(arrayTwo);

console.log(
  `===== Splice to add elements without deleting any existing elements========`
);
const arrayThree = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayThree);
arrayThree.splice(2, 0, 111, 333);
console.log(arrayThree);

console.log(
  `===== Splice to add elements by deleting any existing elements========`
);
const arrayFour = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayFour);
arrayFour.splice(2, 1, 8888, 900);
console.log(arrayFour);
