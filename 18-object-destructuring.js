// Hot interview question
// Obj Destructuring
const student = {
  name: "Jenny",
  city: "pune",
  age: 26,
  pin: 411057,
  country: "India",
  isMarried: true,
};

let { name, city, age, country = "USA", isMarried, marks = 0 } = student;
console.log(name, city, age, country, isMarried);
console.log(marks);

// Array Destructuring

array = ["Jenny", "Elon", "Stew"];
let [n1, n2, n3 = "trump", n4 = "akash"] = array;
console.log(n1, n2, n3, n4);
console.log(array);
