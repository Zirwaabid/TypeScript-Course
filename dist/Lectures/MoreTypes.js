"use strict";
// Type insertion : means developer are saying to trust him that some type is string (eg) and then we sometimes forcefully assert the type to use all properties like in below example
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let BookString = `{"name":"who moved my cheese"}`;
let BookObject = JSON.parse(BookString);
console.log(BookObject.name);
// difference between any and unknown
let value;
value = "hello";
value = [2, 3, 4];
value = 32;
value.toUpperCase();
// we use any that's why it gives no error
let newValue;
newValue = "hello";
newValue = [2, 3, 4];
newValue = 32;
// but now during the use of unknown , we have to check the type with the help of guards before using or access any property or method to avoid any error like below
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
//  type assertions in try catch
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
        // now we check that if error is instance of Error then definitly it will contain the message then we easily use the error.message without any confusion 
    }
    console.log("Error :", error);
}
// another case:
let data = "Zirwa";
let stringData = data;
console.log(stringData.toUpperCase());
// in upper case , we give data the type unknown , but we initialize it with string ; now in string data we are saying that this data will be string only and initilize it with the data  but if we not using "as"  it gives error because data is unknown means its data type is not confirmed but we forcefully use the type assertion (as) that data will be string by using "as" , so now we can use all the properties of string for string data
// but this type assertion will not validate during the run time , it only tell the ts to not complaining and trust me the data is string ,so we can use it only when we are confirm that our data type will be string otherwise it will give error because we lied to ts
// so best practice is to use type narrowing  : like below
if (typeof data === "string") {
    let stringData = data;
    console.log(stringData.toUpperCase());
}
// dom case
const inputElement = document.getElementById("username");
function RedirectBasedOnRoll(role) {
    if (role === "admin") {
        console.log("Redirecting to the admin  dashboard");
        return;
    }
    if (role === "user ") {
        console.log("Redirecting to the user dashboard");
        return;
    }
    role;
    // now in upper case , we use all the cases of roll means admin and user,but we write the role in upper line to check is there any condition left of role or we complete it by hover on the role on upper line , it is showing the role : never which means no condition left 
    //  advatantage of this is , if many developers work on the project , and someone else give role  another conditon like super admin in another file , but in this file : by hovering on role we know that the role has some other condition that we need to check...
}
//# sourceMappingURL=MoreTypes.js.map