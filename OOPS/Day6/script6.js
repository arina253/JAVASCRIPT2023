//Creating object by Object.create()

// let amol = Object.create({})
// console.log(amol)

// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 30
// amol.rollNo = 45
// amol.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }

// console.log(amol)
// amol.displayName()


let obj = {
    init: function (fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    },
    displayName: function(){
        console.log(this.firstName + this.lastName)
 }
}

let amol = Object.create(obj)
console.log(amol)       // {}

amol.init("amol","rao",30,45)
console.log(amol)
amol.displayName()




