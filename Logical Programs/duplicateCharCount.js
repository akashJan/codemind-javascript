function duplicateCharCount(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char != "") {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  for (const char in charCount) {
    if (charCount[char] > 1) {
      console.log(`${char} - ${charCount[char]}`);
    }
  }
}

const strings = ["Banana", "Apple", "Software Developer"];

strings.forEach((str) => {
  console.log(`Duplicating characetrs in the string "${str}" are: `);
  duplicateCharCount(str);
  console.log(" ");
});
