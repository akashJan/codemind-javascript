class Student {
  // Data members
  // name;
  // college;
  // marks;
  // city;

  // Constructor
  constructor(name, college, marks, city) {
    this.name = name;
    this.college = college;
    this.marks = marks;
    this.city = city;
  }

  // Member Function
  details() {
    console.log(
      `Name: ${this.name}, college: ${this.college}, marks: ${this.marks}, city: ${this.city}`
    );
  }
}
const stdJenny = new Student("Jenny", "COEP", "90%", "Pune");
stdJenny.details();

const stdStew = new Student("Stew", "MIT", "67%", "LA");
stdStew.details();

const stdElon = new Student("Elon", "Stanford", "97%", "LA");
stdElon.details();
