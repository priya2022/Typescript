//implicit

// let arr =[2,10,3]
// arr.push("2")
// console.log(arr)
// let str = ["a","b","c"]
// str.push(9)
// console.log(str)
// let bln = [true,false,true]
// bln.push("true")
// console.log(bln)


//Explicit

// let arr:string[]=['a','b','c','d','e','f','g','h','i']
// arr.push("j","k")
// arr.slice()
// console.log(arr)
// let fruits:string[]=["apple","pineapple","orange","lemon","jackfruit"]
// let citrus = fruits.slice(2,4)
// console.log(citrus)

// let number:number[]=[1,22,44,9,10,99]
// number.push(55)
// number.splice(4,3)
// let index= number.indexOf(44)
// number.splice(index,1)
// console.log(number)


// //boolean

// let bool:boolean[]= [true,false,false,true]
// bool.push(true,false)
// bool.pop()
// bool.pop()
// console.log(bool)

//Declare and assign(definition) later

let numberSample=[]
numberSample.push(3)
console.log(numberSample)

let numberSam:number[]=[];
numberSam.push(55)
console.log(numberSam)

let mystring:string[]=[];
mystring.push("pru","ar","sa")
let mynewstirng= mystring.slice(2,3)
console.log('mynewstirng',mynewstirng);

console.log(mystring)

let myBool:boolean[]=[]
myBool.push(true)
console.log(myBool)

//Read Only

const myStr:readonly string[]=["prank"]


console.log('myStr',myStr);




