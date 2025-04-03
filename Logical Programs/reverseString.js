// Reverse the string using any existing methods that you know
const str1 = "Software";
const str2 = "UI Developer";

function isReverse(str) {
  let result = str.split("").reverse().join("");
  return result;
}
console.log(`The reverse of the string "${str1}" is : ${isReverse(str1)}`);
console.log(`The reverse of the string "${str2}" is : ${isReverse(str2)}`);

// Reverse the string without using predefined methods.
const str3 = "Web Developer";
const str4 = "Billion Dollar";
const str5 = "Java";

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(`The reverse of the string "${str3}" is : ${reverseString(str3)}`);
console.log(`The reverse of the string "${str4}" is : ${reverseString(str4)}`);
console.log(`The reverse of the string "${str5}" is : ${reverseString(str5)}`);
