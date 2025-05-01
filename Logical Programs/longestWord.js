function longestWord(str) {
  const words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
  let longest = "";
  let maxLength = 0;
  words.forEach((word) => {
    if (word.length > maxLength) {
      longest = word;
      maxLength = word.length;
    }
  });
  return longest;
}

const strings = [
  "Learn with us, Job with us",
  "Fail. Learn. Grow. Evolve. Succeed",
  "Write Debug and Execute",
  "Frontend Developer - Complete Web Development",
  "Do or Die",
];

strings.forEach((str) => {
  console.log(`Longest word in "${str}": ${longestWord(str)}`);
});
