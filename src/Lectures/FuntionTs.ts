function makeChai(type: string, cups: number) {
    return `making ${cups} of ${type} chai`
}
console.log(makeChai("Ginger", 2))

// return data type 
function getMarks(): number {
    return 240
}

// backlog functions 
// >> we use void when nothing is return from the function
function logData(): void {
    console.log("Sara lives in Lahore")
}

// optional parameter
function getUser(bio?: string) {
    if (bio) {
        console.log(bio)
    }
    return null
}

function createBook(detail: {
    name: string,
    author: string,
    price: number,
    isFamous: boolean
}) {
    console.log(detail)
}