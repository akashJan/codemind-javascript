var show = function (str) {
  var strLength = str.length;
  var result = strLength * strLength;
  return result;
};
var square = show("JavaScript");
console.log(`Given word JavaScript and it's length square is: ${square}`);

var square = show("Google Chrome");
console.log(`Given word Google Chrome and it's length square is: ${square}`);
