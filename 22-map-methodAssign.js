const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("-----Give Array is----");
console.log(arrayNumbers);
console.log("-----task 1 : New array after adding 10 into each element----");
const array1 = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(array1);

console.log("-----task 2 : Cube of each new array element----");
const array2 = arrayNumbers.map((element) => {
  return element * element * element;
});
console.log(array2);

console.log("-----task 3 : Adding index value----");
const array3 = arrayNumbers.map((element, index) => {
  return element + index;
});
console.log(array3);
