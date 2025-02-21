// var index = 10;
// do {
//   console.log(index);
//   index = index + 10;
// } while (index <= 100);

console.log(`******** Assignment using do-while loop ********`);

console.log(`===== Program to print numbers from 5 to 15 =======`);
var i = 5;
do {
  console.log(i);
  i++;
} while (i <= 15);

console.log(`===== Program to print numbers from 50 to 40 =======`);
var i = 50;
do {
  console.log(i);
  i--;
} while (i >= 40);

console.log(`===== Program to print first 15 odd number =======`);
var i = 0;
do {
  let oddNumbers = 2 * i + 1;
  console.log(oddNumbers);
  i++;
} while (i < 15);

console.log(`===== Program to print first 10 even number =======`);
var i = 0;
do {
  evenNumbers = 2 * i;
  console.log(evenNumbers);
  i++;
} while (i < 10);

console.log(`===== Print the table of 5 =======`);

var i = 5;
do {
  console.log(i);
  i = i + 5;
} while (i <= 50);

console.log(`===== Print the table of 10 =======`);
var i = 10;
do {
  console.log(i);
  i = i + 10;
} while (i <= 100);

console.log(`===== Print the table of 10 in reverse order =======`);
var i = 100;
do {
  console.log(i);
  i = i - 10;
} while (i >= 10);
