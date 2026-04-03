"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type narrowing 
// typof: use to narrow primitive types
function addData(data) {
    if (typeof data == "string") {
        return `string data is added : ${data}`;
    }
    return `number data is added : ${data}`;
}
// console.log(addData("Aslam got first position"))
// truthy check : ensure value exixt before using
function sendMsg(msg) {
    if (msg) {
        return `here is msg ${msg}`;
    }
    return `here is default msg : data is recovered`;
}
// console.log(sendMsg("data is lost"))
// exhausting check
function getGrades(marks) {
    if (marks == "excellent") {
        return "grade : A+";
    }
    if (marks == "good") {
        return "grade : A";
    }
    else if (marks == "average") {
        return "grade : B";
    }
    return `Numbers : ${marks}`;
}
console.log(getGrades(33));
//# sourceMappingURL=TypeNarrowing.js.map