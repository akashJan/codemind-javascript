function consonantsCount(str) {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJkLMNPQRSTVWXYZ";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      count++;
    }
  }
  return count;
}

const strings = [
  "JavaScript",
  "HTML and CSS",
  "Language of Internet",
  "I am UI Developer",
  "Do or Die",
];

strings.forEach((str) => {
  console.log(`Number of consonants in "${str}": ${consonantsCount(str)} `);
});
