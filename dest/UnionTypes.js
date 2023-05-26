"use strict";
//unionTypes
//Implicit or type inference
let unionArray = ["one", 1, true];
unionArray.push(false);
unionArray.push("priy");
unionArray.push(5);
console.log('unionArray', unionArray);
//Explicit
let errorCode;
errorCode = "404";
errorCode = 404;
console.log('errorCode', errorCode);
let unionArr = [];
unionArr.push(false);
unionArr.push(1);
unionArr.push("fdslk");
console.log('unionArr', unionArr);
