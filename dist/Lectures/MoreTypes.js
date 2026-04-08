"use strict";
// Type insertion : means developer are saying to trust him that some type is string (eg) and then we sometimes forcefully assert the type to use all properties like in below example
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let BookString = `{"name":"who moved my cheese"}`;
let BookObject = JSON.parse(BookString);
console.log(BookObject.name);
//# sourceMappingURL=MoreTypes.js.map