"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = "Ammar";
const myAge = 12;
const isReady = true;
const friendNames = ["Ali", "Sara", "Hammad"];
const student = {
    name: "Ali",
    age: 11,
    city: "Karachi",
};
function sayHello(name) {
    return `Hello ${name}!`;
}
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function isEven(value) {
    return value % 2 === 0;
}
const app = document.getElementById("app");
if (app) {
    app.innerHTML = `
    <h2>Examples</h2>
    <p><strong>Hello:</strong> ${sayHello(myName)}</p>
    <p><strong>Add:</strong> ${addNumbers(5, 7)}</p>
    <p><strong>Multiply:</strong> ${multiplyNumbers(4, 3)}</p>
    <p><strong>Even number check:</strong> ${isEven(10)}</p>
    <p><strong>Friends:</strong> ${friendNames.join(", ")}</p>
    <p><strong>Student:</strong> ${student.name} is ${student.age} years old and lives in ${student.city}.</p>
  `;
}
console.log(sayHello(myName));
console.log(addNumbers(5, 7));
console.log(multiplyNumbers(4, 3));
console.log(isEven(10));
console.log(friendNames);
console.log(student);
const result = `My name is ${myName}, I am ${myAge} years old, and I am ready: ${isReady}`;
console.log(result);
//# sourceMappingURL=script.js.map