// Assignment on Function & String

var str = "   Hey you are doing good, keep it up   ";
function stringHandsOn() {
  console.log(`1:- Printing the string:${str}\n`);
  console.log(`2:- Length of the string is: ${str.length}\n`);
  var result = str.trim();
  console.log(
    `3:- Removing the extra spaces:\nTrimmed string: ${result}\nLength is: ${result.length}\n`
  );
  var extraSpaces = str.length - result.length;
  console.log(`4:- Extra Spaces: ${extraSpaces}\n`);
  var firstChar = result.charAt(0);
  var lastChar = result.length - 1;
  console.log(
    `5:- First and Last character after trim:\nFirst Char: ${firstChar} , Last Char: ${lastChar}\n`
  );
  var totalWords = result.split(" ");
  console.log(`6:- Total words available in string: ${totalWords.length}\n`);
  console.log(
    `7:- Index of the word from given string: ${str.indexOf("good")}\n`
  );
  //   var newString = str.substr(22, 40);
  console.log(`8:- The substring from index 22: ${str.substr(22, 40)}\n`);
  // var upWord = result.endsWith("up");
  console.log(`9:- String ends with "up": ${result.endsWith("up")}\n`);
  // var heyWord = result.startsWith("Hey");
  console.log(`10:- String starts with "Hey": ${result.startsWith("Hey")}`);
}

stringHandsOn();
