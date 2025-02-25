const city = "Pune";
console.log(city);
// city = "Mumbai";// Not allowed
// console.log(city);

let age;
console.log(age);
age = 22;
console.log(age);
age = 50;
console.log(age);

let isMarried = true;
console.log(isMarried);

var street = "Wakad";
var street = "SB Road";

// let isMarried = "No"; // Not allowed

function show() {
  if (10 > 5) {
    var firstName = "Stew";
    let lastName = "Jobs";
    const position = "UI Developer";
  }
  console.log(firstName);
  // console.log(lastName); // Not allowed
  // console.log(position); //Not allowed
}
// console.log(firstName);
show();
// console.log(firstName, lastName, position); // Not Allowed
