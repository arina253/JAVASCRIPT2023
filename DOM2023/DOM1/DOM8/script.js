 let headOne = document.querySelector ('#one')
 let buttonColor = document.querySelector ('button')
 console.log (headOne)
 console.log (buttonColor)

 buttonColor.addEventListener('click',function(){
    headOne.style .color = "red"
    headOne.style.backgroundColor = "yellow"
    headOne.textContent = "arina joshi"
 })