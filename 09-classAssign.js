class Vehicle {
  // name;
  // model;
  // fuel;
  // price;

  constructor(name, model, fuel, price) {
    this.name = name;
    this.model = model;
    this.fuel = fuel;
    this.price = price;
  }

  details() {
    console.log(
      `Name: ${this.name}, Model: ${this.model}, Fuel Type: ${this.fuel}, Price: ${this.price}`
    );
  }
}

console.log("------- Task 1 - Car Details---------");

const ferrariCar = new Vehicle("Ferrari", "Spider", "Petrol", "8.55cr");
ferrariCar.details();

let lamborghiniCar = new Vehicle("Lamborghini ", "Huracan", "Petrol", "3.2cr");
lamborghiniCar.details();

let mercedesCar = new Vehicle("Mercedes ", "Benz ", "Petrol", "1cr");
mercedesCar.details();

let landRoverCar = new Vehicle("Land Rover", "Range Rover", "Petrol", "2.40cr");
landRoverCar.details();

let toyotaCar = new Vehicle("Toyata ", "Vellfire", "Petrol", "1.2cr");
toyotaCar.details();

console.log("------- Task 2 - Collage Details---------");

class College {
  constructor(name, location, established, courses) {
    this.name = name;
    this.location = location;
    this.established = established;
    this.courses = courses;
  }

  display() {
    console.log(
      `Name: ${this.name}, City: ${this.location}, Established: ${this.established},Courses: ${this.courses}`
    );
  }
}

const clgDetails1 = new College(
  "MIT",
  "USA",
  "1861",
  "Computer Science, Engineering, AI"
);
clgDetails1.display();

const clgDetails2 = new College(
  "Harvard",
  "USA",
  "1636",
  "Law, Medicine, Business"
);
clgDetails2.display();

const clgDetails3 = new College(
  "Oxford",
  "UK",
  "1096",
  "Physics, Mathematics, Literature"
);
clgDetails3.display();

const clgDetails4 = new College(
  "IIT Bombay",
  "India",
  "1958",
  "Engineering, Technology, Data Science"
);
clgDetails4.display();
