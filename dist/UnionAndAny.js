"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union annotaion : data type 
let status = "pending";
console.log(status);
// any 
const orders = ["23", "42", "12"];
let currentOrder;
for (const order of orders) {
    if (order === "42") {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=UnionAndAny.js.map