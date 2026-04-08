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