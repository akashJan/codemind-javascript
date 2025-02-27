function Player(name, totalRuns, ranking) {
  this.name = name;
  this.totalRuns = totalRuns;
  this.ranking = ranking;
}
const playerKohli = new Player("Virat Kohli", "40K", 1);
console.log(playerKohli);

const playerRohit = new Player("Rohit Sharma", "30K", 4);
console.log(playerRohit);
