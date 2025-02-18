console.log("Q1:-");
function squareOfWordLength(str) {
  var strLength = str.length;
  console.log(`Length of the given string is: ${strLength} `);
  var sqrLength = strLength * strLength;
  //   console.log(result);
  return sqrLength;
}
var result = squareOfWordLength("javascript");
console.log(`Square length of given string is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square length of given string is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square length of given string is: ${result}`);

console.log("Q2:-");
function str() {
  var str = "I am UI Developer";
  var strLength = str.length;
  console.log(`Give string is: ${str}, Length of the string is: ${strLength}`);
  var totalWords = str.split(" ");
  var wordCount = totalWords.length;
  console.log(`Total words in string is: ${wordCount}`);
  var divOf = strLength / wordCount;
  console.log(
    `String length divided by total numbers word available in string is: ${divOf}`
  );
  var mulOf = strLength * wordCount;
  console.log(
    `String length multiplied by total numbers word available in string is: ${mulOf}`
  );
}

str();
