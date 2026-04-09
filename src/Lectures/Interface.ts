//>>  Signature Type : Sometime we do not know how many time we use data type , so in this case it is better to use signature style like declear it on time then use it any where like below
type Paper = {
    name: string,
    grade: string,
    marks: number,
}
function Student(result: Paper) {
    console.log(result)
}
function Teacher(result: Paper) {
    console.log(result)
}

//>> Interface: brother of type 

type TeaRecipe = {
    water: number,
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}
// usually we use interface instead of type to use in the class implementation , on the above , we have use type instead of interface but it gives no error because class can only implement an object type or intersection of object types with statically known members. 

//  use of interface
// >>> in the below code the Chai class will give error because we use type cupsize but not object so for using the class implements we have to use only interace instead of type when we use some other type instead of objects like below , and type only with objects 

// type cupSize= "Small" | "large";
// class Chai implements cupSize{

// }

interface cupSize {
    size: "Small" | "large";
}
class Chai implements cupSize {
    size: "Small" | "large" = "Small"
}

// summary of above interface chapter:
// class implement >> type/ interface object  + interface if we use other data types instead of objects 
//  best practice : class with interface

// >>> union and intersection in typescript 

// >>Union / literal type (|) means in the below example tea has only three union options ,means we can use only one of  these three opptions no other option can be used so this is called union type...
type TeaType = "Ginger" | "Masala" | "lemon"
function orderChai(t: TeaType) {
    console.log(t)
}
orderChai("Masala");

type Student = { name: string, grade: number }
type Teacher = { salary: number }
type Human = Student & Teacher;
// in intersection (&) it is necessary to use both student and teacher data type like name ,grade , salary
const schoolAudience: Human = {
    name: "Zirwa",
    grade: 15,
    salary: 23000,
}
schoolAudience.name = "NAs"
console.log(schoolAudience)

// Note : Difference between union or intersection is that in union you can iniatilze the variable with any option but in intersection (combination of many types ) you have to give all options that you declared in data type as shown in above example 

// >> in some cases we need to use optional values so use this "?"
type User = {
    username: string,
    bio?: string
    // so bio is optional
}
const u1: User = {
    username: "Zirwa"
}
console.log(u1)
// so if not use bio , it gives no error because it is optional by using "?"

// >>readonly keyword 
type config = {
    readonly appName: string;
    version: number
}

const cfg: config = {
    appName: "Centrum",
    version: 2,

}
// cfg.appName="rxai"

// by using read only , we cannot assign any other value to that variable which are readonly like in above example appname is readonly that is initialize with centrum so no other value is assigned to appname 