// Program to count words:

// let str1 = "JavaScript The language of Internet";
// let str2 = "Enhance Your Learning Journey with Exclusive Add-ons";
// let str3 = "Beyond frameworks, Beyond Imagination";
// let str4 = "I am passionate software developer";

let strings = [
  "JavaScript The language of Internet",
  "Enhance Your Learning Journey with Exclusive Add-ons",
  "Beyond frameworks, Beyond Imagination",
  "I am passionate software developer",
];

function wordsCount(str) {
  let word = str.split(" ").filter((word) => word.length > 0);
  return word.length;
}

// console.log(
//   `The number of words in the string "${str5}" is: ${charCount(str5)}`
// );

strings.forEach((str) => {
  console.log(
    `The number of words in the string "${str}" is: ${wordsCount(str)}`
  );
});
