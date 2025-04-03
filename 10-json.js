console.log("========== Object to Json ====================");
let std = {
  firstName: "Jenny",

  lastName: "Gates",

  fullName: "ABC MVC DDDD",

  age: 22,

  college: "Government College Pune",

  address: {
    flat: 1005,

    society: "Horizon",

    street: "SB Road",

    city: "Pune",
  },

  friends: ["Jenny", "Bill", "Stew", "Elon"],
};
console.log("Type of give object is: " + typeof std);

const stdJsonString = JSON.stringify(std);

console.log("Object to JSON conversion: " + typeof stdJsonString);
console.log(stdJsonString);

console.log("========== Json to Object ====================");

const employeeJson = `

{

    "employee_id": 11,

    "name": "Jenny",

    "isMarried": true,

    "skills": ["Java", "React", "Angular", "JavaScript"],

    "address": {

        "flat": 1005,

        "floor": 10,

        "street": "Wakad",

        "city": "Pune",

        "PIN": 411057

    } 

}`;

console.log("Type of given string is: " + typeof employeeJson);

const employeeObj = JSON.parse(employeeJson);

console.log("JSON to Object conversion: " + typeof employeeObj);

console.log(employeeObj);
