"use strict";
// type narrowing >> typeScript is all about checking or narrowing the types in different ways
Object.defineProperty(exports, "__esModule", { value: true });
// >>> 1-
// typof: use to narrow primitive types
function addData(data) {
    if (typeof data == "string") {
        return `string data is added : ${data}`;
    }
    return `number data is added : ${data}`;
}
// console.log(addData("Aslam got first position"))
// >>> 2-
// truthy check : ensure value exixt before using
function sendMsg(msg) {
    if (msg) {
        return `here is msg ${msg}`;
    }
    return `here is default msg : data is recovered`;
}
// console.log(sendMsg("data is lost"))
// >>> 3-
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
// console.log(getGrades(33))
// >>> 4
// instanceOf : used for class based objects
class Pizza {
    serve() {
        return 'serving pizza...';
    }
}
class Burger {
    serve() {
        return 'serving burger...';
    }
}
function serveOrder(FastFood) {
    if (FastFood instanceof Pizza) {
        return FastFood.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number");
}
function serveChai(item) {
    if (isChaiOrder(item)) {
        return `Here is your Chai of type ${item.type} with the ${item.sugar} spoon of sugar`;
    }
    return `Serving custom chai ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `masala chai ${order.spicelevel}`;
            break;
        case "ginger":
            return `ginger chai `;
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
        default:
            return ` chai.....`;
            break;
    }
}
console.log(MakeChai({ type: "masala", spicelevel: 4 }));
//# sourceMappingURL=TypeNarrowing.js.map