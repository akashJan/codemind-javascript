console.log("****** Step 1 ******");
function greaterNumber(num1, num2) {
  var biggerNum = num1 >= num2 ? num1 : num2;
  console.log(`The Greatest Number is ${biggerNum}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("****** Step 2 ******");
function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? "True" : "False";
  return result;
}
var returnValue = isEvenOrOddNum(29);
console.log(`Given Number is 29: ${returnValue}`);

var returnValue = isEvenOrOddNum(44);
console.log(`Given Number is 44: ${returnValue}`);

var returnValue = isEvenOrOddNum(0);
console.log(`Given Number is 0: ${returnValue}`);

var returnValue = isEvenOrOddNum(101);
console.log(`Given Number is 101: ${returnValue}`);

console.log("****** Step 2 ******");
function wordLength(str) {
  var result = str.length % 2 == 0 ? "Even" : "Odd";
  return result;
}
var returnValue = wordLength("JavaScript");
console.log(`Given word has ${returnValue} length.`);

var returnValue = wordLength("Developer");
console.log(`Given word has ${returnValue} length.`);

var returnValue = wordLength("Google");
console.log(`Given word has ${returnValue} length.`);
