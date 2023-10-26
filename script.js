//<h1 class="one" id="two" name="nm">Buddha</h1>

//cssSelector
//selecting  elements from an HTML document using different methods and apply event listeners to them.

//tagName
let headO = document.querySelector('h1')
console.log (headO)

//class
let byClass = document.querySelector('.one')
console.log (byClass)

//id
let byID = document.querySelector('#two')
console.log(byID)

//attribute
//tagName [Attribute = "value"]

let byAttribute = document.querySelector('h1[name = "nm"]')
console.log(byAttribute)


//<p id="three" class="four" name="five">Para</p>

let head = document.querySelector('p')
let byID1 = document.querySelector('#three')
let byClass1 = document.querySelector('.four')
let byAttribute1 = document.querySelector('p[id = "three"]')

console.log(head)
console.log(byID1)
console.log(byClass1)
console.log(byAttribute1)


//Program 1

let headTwo = document.querySelector('#two')
console.log (headTwo)

headTwo.addEventListener('click',function(){
    headTwo.textContent = "Ram"
    headTwo.style . color = "red"
})

// let info {
//     firstName : "arina" ,
//     lastName : "joshi"
// }

// console.log (info.firstName)
// info.firstName = "sabita"
// console.log (info)

let info = {
    fullName : "sita joshi",
    parent :{
    father : "ram joshi",
    mother : "rita joshi"
}
}

info.parent.mother = "sarita joshi"
console.log (info)