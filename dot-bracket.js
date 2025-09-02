const students = {
  name: "Arif Hossain",
  1: 50,
  "home-address": "Mirpur",
  marks: 90,
};

// Dot notation
const studentOne = students.name;

// Bracket Notation
const studentTwo = students["name"];
// console.log(students["home-address"]);

for (const key in students) {
  value = students[key];
  console.log(key, value);
}
