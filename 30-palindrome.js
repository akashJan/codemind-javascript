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

function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let str2 = str.split("").reverse().join("");

  str1 == str2
    ? console.log(`${str} Given string is Palindrome `)
    : console.log(`${str} Given string is Not- Palindrome `);
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
