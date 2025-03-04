// Hot interview question

"use strict";
// age = 20;
// console.log(age);

// person = {
//   name: "akash",
//   age: 26,
// };
// person.name;

// function show(n, n, n, n) {
//   console.log(n);
// }

// show(10, 20, 30, 40);

// function add(...n1) {
//   console.log(n1);
// }

// add(2, 3, 4);

// function add(...n1,n2)  wrong way gives the error

function add(n1, ...n2) {
  console.log(n1);
  console.log(n2);
}

add(2, 3, 4);
