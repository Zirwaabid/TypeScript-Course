"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal object declaration 
const Student = {
    name: "Anas",
    marks: 34,
    rollNumber: 23
};
// >>initialization
const u1 = {
    name: "Peter",
    id: 233311,
    email: "peter@gmail.com"
};
let smallCup = { size: "200ml" };
let largeCup = { size: "500ml", material: "steel" };
smallCup = largeCup;
const studentData = { name: "Zirwa", profession: "Software engineer" };
const studentProfile = studentData;
const updateChai = (updates) => {
    console.log('updating the chai...', updates);
};
updateChai({ name: "masala chai" });
updateChai({ isHot: true });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "ginger tea",
    quantity: 3
});
const ProductInfo = (prouct) => {
    console.log(prouct);
};
ProductInfo({ price: 4500, isAvailable: true });
// omit means if want to omit some property , like in above example we do not want to use secretIngredient propert in our PublicChai data type so we omit it ,now it use all properties of newchai except secretingredient...
//# sourceMappingURL=ObjectTs.js.map