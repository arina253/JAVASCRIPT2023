let ulList = document.querySelector('ul')
let addButton = document.querySelector('#one')
let inputText = document.querySelector('input')

addButton.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li')  //<li></li>
    newLi.textContent = text //<li>Papaya</li>
    addButtonB(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "

})


//<button class = "remove">Remove</button>
      //<button class = "down">Down</button>
     //   <button class = "up">Up</button>

     function addButtonB(li){
        let r = document.createElement('button')  //<button></button>
        r.textContent = "Remove"   //<button>Remove</button>
        r.classList.add('remove')  //<button class = "remove">Remove</button>
        li.appendChild(r)


        let d = document.createElement('button')
            d.textContent = "Down"  //<button>Down</button>
            d.classList.add('down') //<button class = "down">Down</button>
            li.appendChild(d)


            let u = document.createElement('button')
            u.textContent = "Up"
            u.classList.add ('up')
            li.appendChild(u)

     }

     ulList.addEventListener('click',function(event){
        console.log (event.target)
        console.log (event.target.tagName)
        console.log(event.target.className)

        if (event.target.className === "remove"){
             //statements

        }

        else if (event.target.className =="down"){
            //statements
        }

        else if (event.target.className =="up"){
            //statements

        }

})

     