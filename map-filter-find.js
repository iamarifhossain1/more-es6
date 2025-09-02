const students = [
  { id: 1, name: "Arif Hossain", marks: 50 },
  { id: 2, name: "Sharif Hossain", marks: 55 },
  { id: 3, name: "Karim Hossain", marks: 60 },
  { id: 4, name: "Zabir Hossain", marks: 70 },
];

const result = students.map((studentNames) => studentNames.name);
const marks = students.filter((student) => student.marks > 60);
console.log(marks);
