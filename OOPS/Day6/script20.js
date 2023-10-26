
//Scope related difference

//With respect to assignment,let and var are similar
//With respect to scope, let and constant are similar

//Assignment related difference
//Program 1
let a = 10
console.log(a)
a = 50
console.log(a)

const h = 200
console.log(h)
//h = 34
//console.log(h)   //Error:Assignment to constant variable.

var k = 100
console.log(k)
k = 900
console.log(k)

//Scope related difference
//let and const are blocked scope

//Program 2
let j = 10
{
    let k = 20
    console.log(k)
}
console.log(k)

//Program 3
{const pi = 3.14
    console.log(pi)
}
//console.log(pi)  Uncaught ReferenceError: pi is not defined

//Program 4
let l = 100
{
    console.log(l)    //100
    l = 200
    console.log(l)    //200
}
console.log(l)        //200

//Program 5
const h1 = 100
{
    const h1 = 700
    console.log(h1)  //700
}
console.log(h1)      //100

//Program 6
const h2 = 100
{
    //h2 = 800
    //console.log(h2)   //Uncaught TypeError: Assignment to constant variable.

}
console.log(h2)      

//Program 7
//var is a function scope

var h3 = 1000
{
    console.log(h3)   //1000
}
console.log(h3)       //1000
h3 = 9000
console.log(h3)       //9000

//Program 8
var h4 = 80
function showCase(){
    var h4 = 90
    console.log(h4)     //90
    {
        console.log(h4)  //90
    }
}
showCase()
console.log(h4)    //80

//Program 9
var h5 = 88
function showCase1(){
    h5 = 99
    console.log(h5)     //99
    {
        console.log(h5) //99
    }
}
console.log(h5)    //88
showCase1()
console.log(h5)    //99

//Program 10

var y = 8989
let y3 = 89
function display(){
    var y2 = 90
    console.log(y)     //8989
    console.log(y2)    //90
    {
        console.log(y2)  //90
        let y3 = 900
        console.log(y3)  //900
        var j = 9090
    }
    console.log(y3)     //89
    console.log(j)      //9090
}

display()
//console.log(y2)      //Uncaught ReferenceError: y2 is not defined


{
    var h8 = 1000
}
console.log(h8)


