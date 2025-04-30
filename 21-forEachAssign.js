const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("-----task 1----");
arrayNumbers.forEach((element, index) => {
  console.log(`Element : ${element} => Index : ${index}`);
});

console.log("-----task 2----");
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(`Positive number is : ${element}`);
  }
});

console.log("-----task 3----");

let newArr = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    newArr = [...newArr, element];
  }
});
console.log(`Copied negative numbers in new array is : ${newArr}`);
console.log(typeof newArr);

console.log("-----task 4----");
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(`Even number is : ${element}`);
  }
});

console.log("-----task 5----");
let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum of the element is: ${sum}`);

console.log("-----task 6----");
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(`Even index elements is : ${element}`);
  }
});
