
//object literal

let ram = {
    firstName : "ram",
    lastName : "joshi",
    age : 23,
    rollNo : 32,
    displayName : function (){
        console.log(this.firstName + this.lastName)
    }
}

let sam = {
    firstName : "sam",
    lastName : "shrestha",
    age : 20,
    rollNo : 30,
    displayName : function (){
        console.log(this.firstName + this.lastName)
    }

}

//100 objects----700 lines

//Here,method is attached to each object and is common but we do not 
// want to attach object and call the method outside,so we need the 
//concept of prototype.

//Every object  in Js has one Obj. __proto__===Parent.prototype


// Creating object with function constructor

function Person(fn,ln,age,roll){
    this.firstName = fn
    this.lastName = ln
    this.age = age
    this.rollNo = roll
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }
}

let ramQ = new Person ("ramQ","joshiQ",23,32)
let samQ = new Person ("samQ","shrestha",20,30)

console.log(ramQ)
console.log(samQ)


//Every object  in Js has one Obj. __proto__===Parent.prototype
//object__proto__=== parent.prototype

console.log(ramQ.__proto__=== Person.prototype)
console.log(samQ.__proto__=== Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

Person.prototype.country = "India"

console.log(ramQ)
console.log(samQ)

ramQ.displayName()
samQ.displayName()

console.log(ramQ.lastName)
console.log(samQ.lastName)

console.log(ramQ.country)
console.log(samQ.country)