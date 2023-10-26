//<h1 id = "one" class = "two" name = "nm">Hello</h1>

//cssSelector 

let byClass = document.querySelector('.two')
let byId = document.querySelector ('#one')
let headingOne = document.querySelector('h1')
let byAttribute = document.querySelector('h1[name = "nm"]')

console.log (byAttribute)
console.log (byId)
console.log (headingOne)

//Program 1

let firstName = document.querySelector('.fruit')
console.log(firstName)

let allFruitElements = document.querySelectorAll('.fruit')    //NodeList(4) [li.fruit, li.fruit, li.fruit, li.fruit]
//get all elements in array type as list

headingOne.addEventListener('click',function(){
    for (let i = 0; i < allFruitElements.length; i++){
        console.log(i)
        allFruitElements[i].textContent
        console.log (allFruitElements[i].textContent)
        allFruitElements[i].computedStyleMap.color = "red"
    }
})

//Program 2

//<p id = "three" class = "three" name = "nm">paragraph</p>

document.querySelector('#three')
let byIdb = document.getElementById('three')       //give nodes
console.log (byIdb)

//let byClassB = document.querySelectorAll('.fruit')
let byClassB = document.getElementsByClassName('fruit')   //get html collection
console.log(byClassB)

//document.querySelectorAll('li')
let liList = document.getElementsByTagName('li')          //get html collection
console.log(liList)

//document.querySelectorAll('p[name = "nm"]')
let byName = document.getElementsByName('nm')     //give nodes
console.log(byName)

