// let ulList = document.querySelector('ul')
// let inputText = document.querySelector('input')
// let buttonA = document.querySelector('button')

// console.log(ulList)
// console.log(inputText)
// console.log(buttonA)

// buttonA.addEventListener('click', function(){
//      let liText = inputText.value   //Papaya
//      let newElement = document.createElement('li')  // <li></li>
//      newElement.textContent = liText    // <li>Papaya</li>
//      ulList.appendChild(newElement)
//      inputText.value = ""
// })

let ulList = document.querySelector('ul')
let  inputText = document.querySelector('input')
let buttonA = document.querySelector('button')
console.log(ulList)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let liText = inputText.value // Papaya
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = liText // <li>Papaya</li>
    ulList.appendChild(newElement)
    inputText.value = ""
})

ulList.addEventListener('click',function(){
    ulList.style.color = "red"
})