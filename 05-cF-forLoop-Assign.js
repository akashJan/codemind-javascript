console.log(`===== Program to print numbers from 5 to 15 =======`);
for (let index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(`===== Program to print numbers from 50 to 40 =======`);
for (let index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(`===== Program to print first 15 odd number =======`);
for (let index = 1; index < 15; index++) {
  let oddNumber = 2 * index + 1;
  console.log(oddNumber);
}

console.log(`===== Program to print first 10 even number =======`);
for (let index = 1; index < 10; index++) {
  let evenNumber = 2 * index;
  console.log(evenNumber);
}

console.log(`===== Print the table of 5 =======`);
for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}

console.log(`===== Print the table of 10 =======`);
for (let index = 10; index <= 100; index = index + 10) {
  console.log(index);
}

console.log(`===== Print the table of 10 in reverse order =======`);
for (let index = 100; index >= 10; index = index - 10) {
  console.log(index);
}
