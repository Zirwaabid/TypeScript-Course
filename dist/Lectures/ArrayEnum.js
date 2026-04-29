"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declaration of array 
const studentNames = ["Sara", "Ayesha"];
const studentMarks = [45, 67];
// 2nd way of declaring array
const rating = [3.4, 5.6];
const AllUserDetails = [
    {
        name: "Zirwa Abid",
        email: "Zirwaabid112@gmail.com",
        id: 1,
        isActive: true
    },
    {
        name: "Azra Abid",
        email: "Azraabid112@gmail.com",
        id: 3,
        isActive: true
    }
];
// >> readonly
const cities = ["Lahore", "Karachi"];
// by using read only we cant push or or use any methods or can't chnage its value  because it is read only
// >>multi dimensional array 
const tables = [
    [1, 2, 3],
    [4, 5, 6]
];
// tuples 
let chaiTuple;
chaiTuple = ["ginger", 3];
let userInfo;
userInfo = ["zirwa", 21];
const location = [233, 334];
// by using readonly we can't change locatio value again 
// better practice of chaiTuple
const roomItems = ["table", 3400];
let student = ["zirwa", 23];
student.push("ANAS");
// enums
var cupSize;
(function (cupSize) {
    cupSize[cupSize["SMALL"] = 0] = "SMALL";
    cupSize[cupSize["MEDIUM"] = 1] = "MEDIUM";
    cupSize[cupSize["LARGE"] = 2] = "LARGE";
})(cupSize || (cupSize = {}));
const size = cupSize.SMALL;
var status;
(function (status) {
    status[status["PENDING"] = 100] = "PENDING";
    status[status["SERVER"] = 101] = "SERVER";
    status[status["CANCELLED"] = 102] = "CANCELLED"; //102
})(status || (status = {}));
// so if you assign value to first variable it will automatically asign value to other variable so not good practice
var chaiType;
(function (chaiType) {
    chaiType["MASALA"] = "Masala";
    chaiType["GINGER"] = "ginger";
})(chaiType || (chaiType = {}));
function serverChai(type) {
    console.log(`here is your chai ${type}`);
}
serverChai(chaiType.GINGER);
// less use but still below const use in high projects
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
const s = Sugars.LOW;
//# sourceMappingURL=ArrayEnum.js.map