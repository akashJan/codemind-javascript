const frdList = ["Jenny", "Stew", "Bill", "Elon"];

frdList.sort(); // Sorting in ascending order
console.log(frdList);
frdList.reverse(); //
console.log(frdList);

const arrayNum = [9, 4, 11, 31, 81, 250];
// arrayNum.sort(); // Sorting
arrayNum.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(arrayNum);
// arrayNum.reverse();
