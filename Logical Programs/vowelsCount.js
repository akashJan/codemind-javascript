// Program to count vowels
//Note: While counting vowel, consider the lower & upper-case vowels as well

// let str1 = "JavaScript";
// let str2 = "HTML and CSS";
// let str3 = "Language Of Internet";
// let str4 = "I am UI Developer";
// let str5 = "Do or Die";

let strings = [
  "JavaScript",
  "HTML and CSS",
  "Language Of Internet",
  "I am UI Developer",
  "Do or Die",
];

function vowelsCount(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
// console.log(
//   `The number of 'a' character in the string "${str5}" is ${vowelsCount(str5)}`
// );

strings.forEach((str) => {
  console.log(
    `The number of 'a' vowels in the string "${str}" is ${vowelsCount(str)}`
  );
});
