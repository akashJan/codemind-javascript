// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// const result = isPalindrome("madam");
// console.log(result);

// function isPalindrome(str) {
//   let str1 = str.toLowerCase();
//   let str2 = str1.split("").reverse().join("");
//   str1 == str2
//     ? console.log(`${str} Given string is Palindrome `)
//     : console.log(`${str} Given string is Not- Palindrome `);
// }

// isPalindrome("madam");
// isPalindrome("141");
// isPalindrome("Sunday");
// isPalindrome("mom");
// isPalindrome("listen");
// isPalindrome("dad");

// Accepting string as array , checking each word for palindrome

let strings = ["madam", "141", "Sunday", "mom", "listen", "dad"];
function isPalindrome(str) {
  let reversed = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() == reversed;
}
strings.forEach((str) => {
  console.log(
    `Give string "${str}" is : ${
      isPalindrome(str) ? "a Palindrome" : "not a Palindrome"
    } `
  );
});
