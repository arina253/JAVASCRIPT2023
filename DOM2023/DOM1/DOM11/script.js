let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonColor = document.querySelector('button')

console.log(headOne)
console.log(inputText)
console.log (buttonColor)

buttonColor.addEventListener('click',function(){
    let clText = inputText.value
    headOne.style.color = clText
    inputText.value = ""
})