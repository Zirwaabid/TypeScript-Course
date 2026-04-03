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
//# sourceMappingURL=TypesInTs.js.map