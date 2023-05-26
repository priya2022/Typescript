"use strict";
//Implict or type Inference
let employee = {
    name: "priya",
    designation: "it",
    age: 55,
    isPermanent: true,
    salary: 33
};
employee.age = 52;
//Not Allowing extra object
//employee.department ="payroll"
//OverWriting Object
employee = {
    name: "aranga",
    designation: "ece",
    age: 56,
    isPermanent: false,
    salary: 88
};
console.log('omb', employee);
const person = {
    name: "priua",
    age: 33,
    isPresent: true
};
console.log('person', person);
const newPerson = {
    name: "priea",
    age: 55,
    isWork: true
};
console.log('newPerson', newPerson);
const anoterPerson = {
    name: "priea",
    isWork: true
};
console.log('anoterPerson', anoterPerson);
