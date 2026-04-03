// type narrowing 

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
