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
const cfg = {
    appName: "Centrum",
    version: 2,
};
// cfg.appName="rxai"
// by using read only , we cannot assign any other value to that variable which are readonly like in above example appname is readonly that is initialize with centrum so no other value is assigned to appname 
//# sourceMappingURL=Interface.js.map