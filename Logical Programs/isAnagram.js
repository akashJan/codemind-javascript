function isAnagram(str1, str2) {
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (cleanStr1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const pairs = [
  ["listen", "silent"],
  ["heart", "earth"],
  ["debit card", "credit card"],
];
pairs.forEach((pair) => {
  const str1 = pair[0];
  const str2 = pair[1];

  if (isAnagram(str1, str2)) {
    console.log(`"${str1}" and "${str2}" are anagrams`);
  } else {
    console.log(`"${str1}" and "${str2}" are not anagrams`);
  }
});
