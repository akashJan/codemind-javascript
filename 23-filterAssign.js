const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("-----Give Array is----");
console.log(array);

console.log("-----task 1: Finding all num which are greater than 50");
const greater = array.filter((element) => {
  return element > 50;
});
console.log(greater);
console.log("-----task 2: Finding all even num from given array");
const evenArray = array.filter((element) => {
  return element % 2 == 0;
});
console.log(evenArray);

console.log("-----task 3: Finding all odd num from given array");
const oddArray = array.filter((element) => {
  return element % 2 !== 0;
});
console.log(oddArray);

console.log("-----task 4: Finding multiple of 5");
const mul = array.filter((element) => {
  return element % 5 == 0;
});
console.log(mul);

console.log("-----task 5: Finding num btn 20 to 50");
const range = array.filter((element) => {
  return element >= 20 && element <= 50;
});
console.log(range);
