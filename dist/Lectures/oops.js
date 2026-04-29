"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour;
    constructor(flavour) {
        this.flavour = flavour;
        // this referes to the values of the object who created the object ,in this case this refers to all the values of masala chai 
        console.log(this);
    }
}
const MasalaChai = new Chai("ginger");
MasalaChai.flavour = "Masala";
//# sourceMappingURL=oops.js.map