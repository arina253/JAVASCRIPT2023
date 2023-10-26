
//function declaration
//function expression
//arrow function


//string as a parameter and string as a return type

function greet(word) {
    return `Good ${word}!`
}

let q1 = greet("morning")
console.log(q1)
let q2 = greet("afternoon")
console.log(q2)

//number as a parameter and number as a return type

function addition(x, y) {
    return x + y
}
let q3 = addition(10, 20)
console.log(q3)

//array as a parameter and array as a return type

let names = ["ram", "sam", "hari", "rita"]

function addElement(arr) {
    //let arr = ["ram","sam","hari","rita"]
    arr.push("amol")
    return arr
}

let q4 = addElement(names)
console.log(q4)

//object as a parameter and object as a return type

let info = {
    firstName: "Arina",
    lastName: "joshi"
}

function addCity(obj) {
    obj.city = "pune"
    return obj
}
let q5 = addCity(info)
console.log(q5)

//boolean as a parameter and boolean as a return type

function canDrive(age, haveVehicle) {
    if (age >= 18 && haveVehicle) {
        return true
    }
}

let q6 = canDrive(18, true)
console.log(q6)

//function as a parameter and function as a return type

//function expression

let x= 10
console.log(x)

let add = function (x, y) {
    return x + y
}

//function as a parameter to other function
function additionB(fn, x, y) {
    //let fn = function(x,y){
    //return x + y
    //}
    let q7 = fn(x, y)
    return q7

}
let q8 = additionB(add, 12, 4)
console.log(q8)


//function as return type(closures)
//Methods and properties are accessible even after returning or 
//closing function

function subtraction(){
    let x = 10
    let y = 5
    return function (){
        return x - y
    }
}
let q9 = subtraction()
//let q9 = function (){
//        return x - y
// }

console.log(q9)
console.log(q9())


//****************************************************************//


//function expression

let additionD = function(x,y){
    return x-y
}

let q20 = additionD(12,3)
console.log(q20)

//Arrow function

// let additionE = function(x,y){
//     return x - y   
// }

// let q30 = additionE(12,3)
// console.log(q30) 

////If in arrow function,there is only one statement in block,we can 
//remove curly brace  and remove return keyword

let additionE = (x,y) => x - y

let q30 = additionE(12,3)
console.log(q30)



