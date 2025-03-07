const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("-----Give Array is----");
console.log(array);

console.log("-----task 1: Finding sum of all using reduce() & traditional way");

console.log("-----Using Reduce ----");
const sum = array.reduce((runningTotal, element) => {
  return runningTotal + element;
}, 0);
console.log(sum);

console.log("-----Using Traditional way ----");
let sumNum = 0; // 11
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  sumNum = sumNum + element; // 6 + 5
}
console.log(sum);

console.log("-----task 2: Finding num mul of 5 & sum of it");

const sumOf = array
  .filter((element) => {
    return element % 5 == 0;
  })
  .reduce((runningTotal, element) => {
    return runningTotal + element;
  }, 0);
console.log(sumOf);
