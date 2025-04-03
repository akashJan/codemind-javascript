// 1. WAP to find the length or total number of characters of the strings

const str1 = "Hello, World!";
const length = str1.length;
console.log(`The length of the string "${str1} is : ${length}"`);

const str2 = "JavaScript is the language of Internet";
const length2 = str2.length;
console.log(`The length of the string "${str2}" is: ${length2}`);

console.log("------------------------------");

// 2. WAP to print or log the last character of the given strings

const str3 = "Hey, my friend, Programming Language";
const str4 = "I am learning logical programs";
const str5 = "Angular";

function getLastCharacter(str) {
  return str.charAt(str.length - 1);
}

console.log(
  `The last character of the string "${str3}" is: ${getLastCharacter(str3)}`
);
console.log(
  `The last character of the string "${str4}" is: ${getLastCharacter(str4)}`
);
console.log(
  `The last character of the string "${str5}" is: ${getLastCharacter(str5)}`
);

// 3. WAP to print or log the first character of the given strings

const str6 = "React";
const str7 = "Elon Musk";
const str8 = "Apple founder is Stew Job";

function getFirstCharacter(str) {
  return str.charAt(0);
}

console.log(
  `The first character of the string "${str6}" is: ${getFirstCharacter(str6)}`
);
console.log(
  `The first character of the string "${str7}" is: ${getFirstCharacter(str7)}`
);
console.log(
  `The first character of the string "${str8}" is: ${getFirstCharacter(str8)}`
);

// 4. WAP to check whether given strings contains word ‘UI’ or not?

const str9 = "React - UI Developer";
const str10 = "UI Developer";
const str11 = "Front end and backend technologies";

function containsUI(str) {
  return str.includes("UI");
}

console.log(`Does the string "${str9}" contain 'UI': ${containsUI(str9)}`);
console.log(`Does the string "${str10}" contain 'UI': ${containsUI(str10)}`);
console.log(`Does the st9ring "${str11}" contain 'UI': ${containsUI(str11)}`);

// 5. WAP to How do you split a string into an array of substrings?

const str12 = "apple,orange,banana";
const str13 = "Stew,Bill,Jenny,Elon";

function splitString(str, delimiter) {
  return str.split(delimiter);
}

const result1 = splitString(str12, ",");
console.log(`The array od substrings from "${str12}" is:`, result1);
const result2 = splitString(str13, ",");
console.log(`The array od substrings from "${str13}" is:`, result2);
