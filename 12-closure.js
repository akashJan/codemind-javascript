// Hot interview question

var globalVariable = 100;
function outer() {
  let outerFunVariable = 200;
  let inner = function () {
    console.log(`Inside inner function`);
    let innerFunVariable = 300;
    console.log(innerFunVariable);
    console.log(outerFunVariable);
    console.log(globalVariable);
  };
  return inner;
}
var result = outer();
result();
