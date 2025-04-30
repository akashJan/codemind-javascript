function reverseWord(str) {
  const words = str.split(" ");
  const reverseWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reverseWords.join(" ");
}

const strings = [
  "Arise! Awake! and stop not until the goal is reached",
  "Learn with us, Job with us",
];

strings.forEach((str) => {
  const reversedString = reverseWord(str);
  console.log(`Original String "${str}"`);
  console.log(`Reversed Words "${reversedString}"`);
  //   console.log("");
});
