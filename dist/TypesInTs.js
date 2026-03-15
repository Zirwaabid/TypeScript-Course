"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// inference ( in which we do not set data type , the ts automatically detect it)
let name = "Zirwa";
// name=22 error: type number is not assigneable to name because it is string so typescript is inference.
let cups = Math.random() > 0.5 ? "10" : 5;
// now ts understand that types of cups is string | number
console.log(cups);
// annotations
let data = "zirwa";
data = "developer";
//  we assign the data type by ourself so this is annotation 
console.log(data);
//# sourceMappingURL=TypesInTs.js.map