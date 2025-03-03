const employeeJson = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
    "street":"32, Laham St.",
    "city":"Innsbruck",
    "country":"Austria"
    },
    "referred-by":"E0012"
}`;

console.log("Json to Object:");
const employeeObj = JSON.parse(employeeJson);
console.log(employeeObj);

const dev = employeeObj.role[0];
console.log(`Loged : ${dev}`);

const last = employeeObj.name.split(" ");
const lastName = last[1];
console.log(`Loged : ${lastName}`);

const dt = employeeObj.doj.split("-");
const year = dt[2];
console.log(`Loged : ${year}`);
