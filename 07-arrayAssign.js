const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log("Q1.Log the first and last element on console ");

console.log(`Given array is: ${fruits_seasonal}`);
console.log(`First element of the array is: ${fruits_seasonal[0]}`);
console.log(
  `Last element of the array is: ${
    fruits_seasonal[fruits_seasonal.length - 1]
  }\n`
);

console.log(
  "Q2.Add element 'Papaya' before the element 'Banana' and log the array"
);
console.log(`Given array is: ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After adding: ${fruits_seasonal}\n`);

console.log("Q3.Remove 'Mango' from the array");
console.log(`Give array is: ${fruits_seasonal}`);
fruits_seasonal.splice(4, 1);
console.log(`After removing: ${fruits_seasonal}\n`);

console.log("Q4.Add element 'Pineapple' at last position");
console.log(`Give array is: ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`After adding: ${fruits_seasonal}\n`);

console.log("Q5.Insert element 'Dragon Fruit' before 'Water Melon");
console.log(`Give array is: ${fruits_seasonal}`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(`After adding: ${fruits_seasonal}\n`);

console.log("Q6.Replace 'Orange' with 'Kiwi'");
console.log(`Give array is: ${fruits_seasonal}`);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(`After replacing: ${fruits_seasonal}\n`);

console.log("Q7.Log the element starting from index 1 to 4");
console.log(`Give array is: ${fruits_seasonal}`);
let afterSlice = fruits_seasonal.slice(1, 5);
console.log(`index from 1 to 4: ${afterSlice}\n`);

console.log("Q8.Log last three element");
console.log(`Give array is: ${fruits_seasonal}`);
// let result = fruits_seasonal.slice(fruits_seasonal.length - 3);
let result = fruits_seasonal.slice(-3);
console.log(`Last three element is: ${result}`);
