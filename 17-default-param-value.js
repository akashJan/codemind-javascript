//  ES-6 Feature
// Default Value - when we does not pass any parameter
// normal
// function add(n1, n2, n3) {
//   console.log(n1 + n2 + n3);
// }
// add(10, 5, 20);

// function with default parameter
function add(n1, n2 = 0, n3 = 0) {
  console.log(n1 + n2 + n3);
}
add(10);
