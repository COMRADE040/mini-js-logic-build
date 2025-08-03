


const touristSpots = ["Sajek", "CoxsBazar", "TanguarHaor"]
const books = ['Habit', 'RichDad', "MoneyManagement"]
const arr = [];
console.log(touristSpots.concat(books))


console.log(arr)




/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var rohim = area / 2;
console.log(rohim);







/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 9999) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}






/** Problem -03 ( Medicine Planner ) */
var lastDay = 1;
//write your code here

for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - rest`);
  }
}






/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

var cut = fileName.slice(-3);

if (
  fileName.slice(-4) === ".jpg" ||
  fileName.slice(-4) === ".txt" ||
  fileName.slice(-4) === ".xpdg" ||
  fileName.slice(-4) === ".txt"
) {
  console.log("Delete");
} else {
  console.log("Store");
}





/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

console.log(`${student.name}${student.roll}.${student.department}@ph.ac.bd`);





/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

var increaseSalary = startingSalary * (1 + 5 / 100) ** experience;

console.log(increaseSalary.toFixed(2));
