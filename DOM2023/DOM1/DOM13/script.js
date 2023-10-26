
//finding the element
//based on useraction read the text from input element
//create a new element and add the text into it
//append the element to li

let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
     let textLi = inputText.value
     let newLi = document.createElement('li') //<li></li>
     newLi.textContent = textLi //<li>Papaya</li>
     ulList.appendChild(newLi)
     inputText.value = " "

})