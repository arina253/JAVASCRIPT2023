//<h1 id = "one" class = "two" name = "nm">Heading</h1>
{/* <ul>
    <li class="fri" name="nm">Apple</li>
    <li class="fri" name="nm">Mango</li>
    <li class="fri" name="nm">Banana</li>
    <li class="fri" name="nm">Grapes</li>
</ul> */}

//Different ways of retrieving elements

// document.querySelector("#one")
// document.querySelector(".two")
// document.querySelector("h1")
// document.querySelector("h1[name = 'nm']")

// document.querySelectorAll("li")
// document.querySelectorAll(".fri")
// document.querySelectorAll("li[name = 'nm']")

// document.getElementById('one')
// document.getElementsByClassName('nm')
// document.getElementsByTagName('li')
// document.getElementsByName('nm')

let headOne = document.getElementById('one')
console.log(headOne.className)
headOne.classList.add("seven")
headOne.classList.remove("seven")
headOne.classList.toggle('eight')
headOne.classList.toggle('eight')

headOne.getAttribute('id')
headOne.setAttribute('id','nine')
headOne.setAttribute('data-cy','minskole')
headOne.removeAttribute('id')

let liList = document.querySelectorAll('li') 
let buttonElement = document.querySelector('button')

//click
// buttonElement.addEventListener('click',function(){
//     for (let i = 0; i < liList.length; i++){
//         liList[i].style.color = "red"
//     }

    //doubleclick
    buttonElement.addEventListener('dblclick',function(){
        for (let i = 0; i < liList.length; i++){
            liList[i].style.color = "red"
        }
    })

//mouseover
buttonElement.addEventListener('mouseover',function(){
    for (let i = 0; i < liList.length; i++){
        liList[i].style.color = "red"
    }
})

//mouseout
buttonElement.addEventListener('mouseout',function(){
    for (let i = 0; i < liList.length; i++){
        liList[i].style.color = "red"
    }
})

//reload
buttonElement.addEventListener('click',function(){
    window.location.reload()  //to reload the current web page.
})
