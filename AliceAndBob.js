"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index"); //why waste time with circle references
const instance = {
    name: '',
    age: 0
};
let castToStudent = index_1.default(instance); //get the caster function
const Alice = {
    name: 'Alice',
    age: 20
};
const Bob = {
    name: 'Bob',
    age: 'psych'
};
let safeStudent = castToStudent(Alice); //works, and safeStudent's type is now Student
let unsafeStudent = castToStudent(Bob); //throws type cast error: property [=>age does not have type number
//# sourceMappingURL=AliceAndBob.js.map