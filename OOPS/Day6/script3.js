//object literal

let amol = {
    firstName : "amol",
    lastName : "rao",
    age : 30,
    rollNo : 5,
    displayName : function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(amol);


//function constructor

function Person (fn,ln,ag,roll){
    this.firstName = fn
    this.lastName = ln;
    this.age = ag;
    this.rollNo = roll
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let amolB = new Person ("amol","rao",20,12)
let chinmayB = new Person("chinmay", "deshpande",20,32)

//Every object has __proto__=== Parent.prototype

console.log(amolB.__proto === Person.prototype)
console.log (chinmayB. __proto__=== Person.prototype)

//adding method to prototype

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

//adding property to prototype

Person.prototype.country = "Nepal"
console.log(amolB)
console.log (chinmayB)

amolB.displayName()
chinmayB.displayName()

console.log(amolB)
console.log(chinmayB)

console.log(amolB.country)
console.log(chinmayB.country)

//instanceof()
console.log(amolB instanceof Person)
console.log(chinmayB instanceof Person)

//hasOwnProperty()

console.log(amolB.hasOwnProperty("firstName"))
console.log(amolB.hasOwnProperty("lastName"))
console.log(amolB.hasOwnProperty("country"))




