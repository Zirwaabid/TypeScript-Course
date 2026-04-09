"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Student(result) {
    console.log(result);
}
function Teacher(result) {
    console.log(result);
}
class MasalaChai {
    water = 100;
    milk = 50;
}
class Chai {
    size = "Small";
}
function orderChai(t) {
    console.log(t);
}
orderChai("Masala");
// in intersection (&) it is necessary to use both student and teacher data type like name ,grade , salary
const schoolAudience = {
    name: "Zirwa",
    grade: 15,
    salary: 23000,
};
schoolAudience.name = "NAs";
console.log(schoolAudience);
const u1 = {
    username: "Zirwa"
};
console.log(u1);
// so if not use bio , it gives no error because it is optional by using "?"
// >>readonly keyword 
//# sourceMappingURL=Interface.js.map