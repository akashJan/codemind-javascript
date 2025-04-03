function spaceCount(str) {
  let count = 0;
  for (const char of str) {
    if (char == " ") {
      count++;
    }
  }
  return count;
}
let result1 = spaceCount("Revision is the mother of success");
console.log("Revision is the mother of success");

console.log(`Count of spaces in the string is: ${result1}`);
console.log("-----------------------------------");

let result2 = spaceCount("JavaScript is the language og internet world");
console.log("JavaScript is the language og internet world");
console.log(`Count of spaces in the string is: ${result2}`);
