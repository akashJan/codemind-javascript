let professor = {
  name: "Elon Musk",
  age: 38,
  city: "US",
  specialization: "A I",
  clg: "University of Pennsylvania",
  degrees: {
    engineering: "CSC",
    PHD: "Adv ComputingF",
    Doctoral: "MBBS",
    MBA: "Finance",
  },
  certificates: [
    "Hacker Rank",
    "Certificate in Adv IFE course",
    "Certificate in Adv Programming",
  ],
};
console.log("----- task 1 -----");
console.log(professor);
console.log("----- task 2 -----");
console.log(professor.degrees);
console.log("----- task 3 -----");
console.log(professor.certificates);
console.log("----- task 4 -----");

let person = {
  name: "Akash",
  age: "27",
  Degree: "BE Computer",
  city: "Pune",
};
console.log(person);

console.log("----- task 5 -----");
person.totalExperience = "14 years";
console.log(person);
console.log("----- task 6 -----");
person.city = "Mumbai";
console.log(person);
console.log("----- task 7 -----");
professor.certificates.splice(2, 0, "Oracle Certificates");
console.log(professor.certificates);
console.log("----- task 8 -----");
console.log(
  `Last index of certificates array is : ${
    professor.certificates[professor.certificates.length - 1]
  }`
);
console.log("----- task 9 -----");
for (const key in professor) {
  if (Object.prototype.hasOwnProperty.call(professor, key)) {
    const element = professor[key];
    console.log(`${key} ==> ${element}`);
  }
}
console.log("-----------");
for (const key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(`${key} ==> ${element}`);
  }
}
