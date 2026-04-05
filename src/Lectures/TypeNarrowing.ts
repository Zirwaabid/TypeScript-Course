// type narrowing >> typeScript is all about checking or narrowing the types in different ways

// >>> 1-
// typof: use to narrow primitive types
function addData(data: number | string) {
    if (typeof data == "string") {
        return `string data is added : ${data}`
    }
    return `number data is added : ${data}`
}
// console.log(addData("Aslam got first position"))

// >>> 2-
// truthy check : ensure value exixt before using
function sendMsg(msg?: string) {
    if (msg) {
        return `here is msg ${msg}`
    }
    return `here is default msg : data is recovered`
}

// console.log(sendMsg("data is lost"))

// >>> 3-
// exhausting check
function getGrades(marks: "excellent" | "good" | "average" | number) {
    if (marks == "excellent") {
        return "grade : A+"
    }
    if (marks == "good") {
        return "grade : A"
    }
    else if (marks == "average") {
        return "grade : B"
    }

    return `Numbers : ${marks}`
}
// console.log(getGrades(33))

// >>> 4
// instanceOf : used for class based objects

class Pizza {
    serve() {
        return 'serving pizza...'
    }
}

class Burger {
    serve() {
        return 'serving burger...'
    }
}

function serveOrder(FastFood: Pizza | Burger) {
    if (FastFood instanceof Pizza) {
        return FastFood.serve();
    }
}

// >>>5
// custom type guards : validate object structure
type ChaiOrder = {
    type: string
    sugar: number
}


function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number"
    )
}

function serveChai(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Here is your Chai of type ${item.type} with the ${item.sugar} spoon of sugar`
    }
    return `Serving custom chai ${item}`
}

// console.log(serveChai({ type: "masala", sugar: 2 }))


// >> 6 
// • switch / conditions → handle all possible cases

type MasalaChai = { type: "masala", spicelevel: number };
type GingerChai = { type: "ginger", quantity: number };
type elaichiChai = { type: "elaichi", amount: number };

type Chai = MasalaChai | GingerChai | elaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `masala chai with spice level ${order.spicelevel}`
            break;
        case "ginger":
            return `ginger chai with quantity ${order.quantity}`
            break;
        case "elaichi":
            return `elaichi chai with the amout ${order.amount}`
            break;
        default: return ` chai.....`
            break;
    }
}

console.log(MakeChai({ type: "masala", spicelevel: 4 }))