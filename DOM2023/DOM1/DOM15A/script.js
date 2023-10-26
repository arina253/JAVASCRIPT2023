let inputE = document.querySelector('input')
let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')

buttonOne.addEventListener('click',function(){
     let text = inputE.value
     let newL = document.createElement('li')
     newL.textContent = text
     addButton(newL)
     ulList.appendChild(newL)
     inputE.value = " "
})


ulList.addEventListener('click',function(e){

     if (e.target.className === "remove"){         //REMOVE
          let li = e.target.parentElement
         let ulList =  li.parentElement
         ulList.removeChild(li)
     }

     else if (e.target.className === "down"){       //DOWN

          let li = e.target.parentElement
          let ulList = li.parentElement
         let nextLi =  li.nextElementSibling
         if (nextLi){
          ulList.insertBefore(nextLi,li)
         }
     }

     else if (e.target.className === "up") {     //UP

          let li = e.target.parentElement
          let ulList = li.parentElement
          let prevLi = li.previousElementSibling
          if (prevLi){
               ulList.insertBefore (li,prevLi)
          }
     }

})





function addButton(li){

     // <li>Apple
     //    <button class = "remove">Remove</button>
     //    <button class = "up">Up</button>
     //    <button class = "down">Down</button>
     //   </li>

     let r = document.createElement('button')
     r.textContent = "Remove"
     r.classList.add('remove')
     li.appendChild(r)


    let u =  document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add ('down')
    li.appendChild(d)




}






