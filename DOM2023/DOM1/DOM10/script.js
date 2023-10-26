let headOne = document.querySelector('h1')
let button = document.querySelector('button')

console.log(headOne)
console.log(button)

button.addEventListener('click',function(){
    headOne.style.color = "blue"
})