// union annotaion : data type 
let status: "pending" | "completed" | "not started" = "pending"
console.log(status)

// any 
const orders: string[] = ["23", "42", "12"];
let currentOrder: string | undefined;
for (const order of orders) {
    if (order === "42") {
        currentOrder = order
        break
    }
}
console.log(currentOrder)