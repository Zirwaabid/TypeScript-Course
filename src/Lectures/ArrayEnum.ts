// declaration of array 
const studentNames: string[] = ["Sara", "Ayesha"];
const studentMarks: number[] = [45, 67];
// 2nd way of declaring array
const rating: Array<number> = [3.4, 5.6]

// array of object 
type User = {
    name: string,
    email: string,
    bio?: string,
    id: number,
    isActive: boolean
}
const AllUserDetails: User[] = [
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
]

// >> readonly
const cities: readonly string[] = ["Lahore", "Karachi"];
// by using read only we cant push or or use any methods or can't chnage its value  because it is read only

// >>multi dimensional array 
const tables: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

// tuples 
let chaiTuple: [string, number]
chaiTuple = ["ginger", 3];
let userInfo: [string, number, boolean?]
userInfo = ["zirwa", 21]
const location: readonly [number, number] = [233, 334]
// by using readonly we can't change locatio value again 
// better practice of chaiTuple
const roomItems: [name: string, price: number] = ["table", 3400]
let student: [string, number] = ["zirwa", 23]
student.push("ANAS")

// enums
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size: cupSize = cupSize.SMALL

enum status {
    PENDING = 100,
    SERVER, //101
    CANCELLED //102
}
// so if you assign value to first variable it will automatically asign value to other variable so not good practice

enum chaiType {
    MASALA = "Masala",
    GINGER = "ginger"
}
function serverChai(type: chaiType) {
    console.log(`here is your chai ${type}`)
}
serverChai(chaiType.GINGER);

// less use but still below const use in high projects
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = Sugars.LOW

