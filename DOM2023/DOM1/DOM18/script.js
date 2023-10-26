//<h1 id="one" class="two" name="nm">Heading</h1>

{/* <ol>
        <li class = "fruit" name = "fri">Apple</li>
        <li class = "fruit" name = "fri">Banana</li>
        <li class = "fruit" name = "fri">Mango</li>
        <li class = "fruit" name = "fri">Kiwi</li>
        <li class = "fruit" name = "fri">Pear</li>
    </ol> */}

    document.querySelector('#one')
    document.querySelector('.two')
    document.querySelector('h1')
    document.querySelector('h1[name = "nm"]')

    //<li class="fruit" name="fri">Banana</li>

    let liList = document.querySelectorAll('li')
    console.log(liList)

    let liListByClass = document.querySelectorAll('.fruit')
    console.log(liListByClass)

    document.getElementById ('one')                  //html element
    document.getElementsByTagName('li')             //html collection
    document.getElementsByClassName('fruit')       //html collection
    document.getElementsByName('fri')             //nodeList
    

    //<p id = "three" class = "four five" name = "nm">Para</p>

    let ele = document.querySelector('p')
    console.log(ele)

    console.log(ele.className)
    console.log(ele.classList.add("six"))
    ele.classList.remove("six")
    ele.classList.toggle('six')
    ele.classList.toggle('six')
    console.log(ele)

    let q1 = ele.getAttribute('id')
    console.log(q1)
    ele.setAttribute('id','nine')
    console.log(ele)
    ele.setAttribute('data-cy', "username")
    ele.removeAttribute('id')
    console.log(ele)


