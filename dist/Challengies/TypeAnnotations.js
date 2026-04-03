"use strict";
// >>>>>>Challenge 1
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=TypeAnnotations.js.map