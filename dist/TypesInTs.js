"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ****inference ( in which we do not set data type , the ts automatically detect it)
let name = "Zirwa";
// name=22 error: type number is not assigneable to name because it is string so typescript is inference.
let cups = Math.random() > 0.5 ? "10" : 5;
// now ts understand that types of cups is string | number
// ***annotations
// string
let data = "zirwa";
data = "developer";
//  we assign the data type by ourself so this is annotation 
// some other annotations:
// unknown
let value = "Zirwa";
if (typeof value === "string") {
    value = value.toUpperCase();
    console.log(value);
}
// function data types
function add(a, b) {
    return a + b;
}
console.log(add(2, 5));
// array 
let members = ["zirwa", "anas", "sara"];
members.push("ahmed");
console.log(members);
// object data type 
let user1;
user1 = {
    name: "zirwa",
    age: 21,
    isPerson: true
};
console.log(user1);
// >>>>>>Challenge 1
// Fix the TypeScript types.
function multiply(a, b) {
    return a * b;
}
// >>>>Challenge 2
// Create a variable status that only allows:
// "loading"
// "success"
// "error"
let status;
//>>>> Challenge 3
// Write a function:
// isEven
// Rules:
// Input → number
// Output → boolean
// Example:
// isEven(4) → true
// isEven(7) → false
function isEven(number) {
    return number % 2 == 0;
}
console.log(isEven(3));
// >>>>Challenge 4 (Intermediate)
// Create this object type:
// User
// name → string
// age → number
// isAdmin → boolean
// Then create a variable:
// currentUser
let currentUser;
currentUser = {
    name: "Zirwa",
    age: 21,
    isAdmin: true
};
function registerUser(user) {
    return "User registered";
}
const user2 = {
    name: "zirwa",
    email: "zirwa@gmail.com",
    age: 21
};
console.log(registerUser(user2));
//# sourceMappingURL=TypesInTs.js.map