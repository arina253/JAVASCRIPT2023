// Creating object via Es6 class

class Person{
    constructor (fn,ln,age,roll){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.roll = roll
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }

    }
      displayName(){
            console.log(this.firstName + this.lastName)
        }
    
}

let amolC = new Person ("amolC","raoC",34,45)
let arinaC = new Person ("arinaC","joshi",34,65)

amolC.displayName()
arinaC.displayName()

console.log(amolC)
console.log(arinaC)

console.log(amolC.__proto__===Person.prototype)
console.log(arinaC.__proto__===Person.prototype)

console.log(amolC instanceof Person)
console.log(arinaC instanceof Person)

