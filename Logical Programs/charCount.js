// Program to count character ‘a’
//let str1 = "JavaScript";
//let str2 = "Do or Die";
//let str3 = "Learn with us, Job with us";
//let str4 = "Empowering Dreams, Guaranteeing Futures";
// let str5 = "Anny, My favorite fruit is Apple";

const strings = [
  "JavaScript",
  "Do or Die",
  "Learn with us, Job with us",
  "Empowering Dreams, Guaranteeing Futures",
  "Anny, My favorite fruit is Apple",
];

function charCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count++;
    }
  }
  return count;
}

// console.log(
//   `The number of 'a' character in the string "${str5}" is: ${charCount(str5)}`
// );

strings.forEach((str) => {
  console.log(
    `The number of 'a' character in the string "${str}" is: ${charCount(str)}`
  );
});
