/*<h1 id = "one">Fruits</h1>
    <p class = "two"></p>
    <ul>
        <li class = "one">Apple</li>
        <li class = "one">Mango</li>
        <li class = "one">Banana</li>
        <li class = "one">Grapes</li>
    </ul>
    <button id = "three">Button</button>*/

    let e2 = document.querySelector('body')
    console.log (e2)

    e2.addEventListener('click',function(event){
        console.log(event.target) //element
        console.log(event.target.tagName) //tagName
        console.log(event.target.className)
    })