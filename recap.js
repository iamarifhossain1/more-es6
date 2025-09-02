const tax = 5000;
const eta = 5;

const students = { name: "Arif Hossain", Marks: 50 };
const friends = ["Hossain", "Rubel", "Habib", "Shamim", "Hasan"];

// Default parameter
function add(num1, num2 = 0) {}

// Template String

const dynamicText = `My Tax: ${tax} and marks ${students.Marks} has friend: ${friends[0]}`;

const innerHTML = `
<div>
    <h1>Hello: ${friends.length}</h1>
    <p></p>
</div>
`;

// Arrow Function

const addition = (num1, num2) => num1 + num2;
const tenTimes = (x) => x * 10;

// Spread Operator

const newfriends = [...friends, "Rony"];

// Destructuring

const { Marks: totalMarks, age = 28 } = students;
// console.log(totalMarks, age);

const [firstFriend] = friends;
