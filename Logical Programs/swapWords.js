function swapWords() {
  let wordOne = "Angular";
  let wordTwo = "React";

  [wordOne, wordTwo] = [wordTwo, wordOne];
  console.log(`After swaping:`);
  console.log(`WordOe: ${wordOne}`);
  console.log(`WordOe: ${wordTwo}`);
}
swapWords();
