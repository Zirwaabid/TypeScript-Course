// normal object declaration 
const Student = {
    name: "Anas",
    marks: 34,
    rollNumber: 23
}

// type object
// (objects can be declare with the help of type or interface)
// >>declaration of data type
type user = {
    name: string,
    id: number,
    email: string
}
// >>initialization
const u1: user = {
    name: "Peter",
    id: 233311,
    email: "peter@gmail.com"
}

// >> eliest objects of type

// typescript follow structural typing

// but there is also a duck typing means in structural typing compatibility issues come but in duck typing if any condition is satisfy it gives no errors like in examples below:
type Cup = { size: string }
let smallCup: Cup = { size: "200ml" };
let largeCup = { size: "500ml", material: "steel" }
smallCup = largeCup
// now we equal both these cups but small cup have data type cup that only contain size not material so when we equal both these cups it gives no error either the large cup have extra variable material

// another example
type Data = { name: string }
const studentData = { name: "Zirwa", profession: "Software engineer" };
const studentProfile: Data = studentData

// >> split out of data types 
type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }
type Order = {
    id: string,
    item: Item[],
    address: Address
}
// in the order data type, we use the already define data type (item and address) and that is called split out of data type 

// >>Partial 
type Chai = {
    name: string,
    price: number,
    isHot: boolean
};

const updateChai = (updates: Partial<Chai>) => {
    console.log('updating the chai...', updates)
}
updateChai({ name: "masala chai" })
updateChai({ isHot: true })
updateChai({})
// by using partial , we can use any of the property of data type, not compulsary to use all the properties of data type , like in this case we can pass "name" only of chai data type , it gives no error ... but one disadvantage is that we can pass the empty object due to partial and it gives no error

// >>required
type chaiOrder = {
    name?: string,
    quantity?: number

}

const placeOrder = (order: Required<chaiOrder>) => {
    console.log(order)
}
placeOrder({
    name: "ginger tea",
    quantity: 3
})
// so by using requires it is necessary to use all properties of data type (chaiOrder), and you can see that we use ? in chaiOrder data type , means it is optional but still in function by declaring requires it is neceasssry to use all properties otherwise it gives error...

// >>pick 
type Product = { category: string, price: number, isAvailable: boolean, id: number }
type Dress = Pick<Product, "price" | "isAvailable">;
const ProductInfo = (prouct: Dress) => {
    console.log(prouct)
}
ProductInfo({ price: 4500, isAvailable: true })

// so by using pick , we can pick any property from data type that we want to use rather then all properties , because sometimes we need only few properties to use not all properties of object..
// like in above case we define data type product and assign values , then in dress data type we only pick those properties that we want to use in our dress data type by using pick .. so when in the function ProductInfo whose data type is Dress , we can use only two properties which we pick from product

// >> omit 
type NewChai = {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string
};
type PublicChai = Omit<NewChai, "secretIngredients">;
// omit means if want to omit some property , like in above example we do not want to use secretIngredient propert in our PublicChai data type so we omit it ,now it use all properties of newchai except secretingredient...
