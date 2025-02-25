const mapStudents = new Map();
mapStudents.set(11, "Jenny");
mapStudents.set(22, "Stew");
mapStudents.set(33, "Elon");
mapStudents.set(22, "Bill");
mapStudents.set(55, "Jenny");
console.log(mapStudents);

console.log(`Student with roo number 33: ${mapStudents.get(33)}`);
