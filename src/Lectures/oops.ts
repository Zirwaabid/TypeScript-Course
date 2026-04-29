class Chai {
    flavour: string;
    constructor(flavour: string) {
        this.flavour = flavour;
        // this referes to the values of the object who created the object ,in this case this refers to all the values of masala chai 
        console.log(this)
    }
}
const MasalaChai = new Chai("ginger")
MasalaChai.flavour = "Masala"

// excess modifier  (public , private )
class user {
    public name: string = "Zirwa Abid";
    private Password: number = 234;  // we cannot access private directly anywhere outside the class

    reveal() {
        return this.Password
    }
}
const user1 = new user
user1.name
user1.reveal() // we can access private variable through the function or other publec methods

// protected ( we can access it within the class or inherited class (which is inherited from the class where it exist))
// like in below example
class shopname {
    protected shopName = "IntraBook";
}
class branch extends shopname {
    getName() {
        return this.shopName
    }
}
new branch().getName()

// >>another way to write the private using #
class walet {
    #balance = 2000
    getBalance() {
        return this.#balance
    }
}
const w = new walet();
w.getBalance()

// getter setter : ued when , when we cant access the value directly like in private. get to get values, set to set values
class modernChai {
    private _sugar = 2;
    get sugar() {
        return this._sugar
    }
    set sugar(value: number) {
        if (value > 5) {
            throw new Error("too sweet")
        }
        this._sugar = value
    }
}