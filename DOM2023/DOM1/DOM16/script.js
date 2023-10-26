//<h1 id="one" class="two" name="nm">arina</h1>

//<p>I am learning selenium</p>

{/*<ul>
<li class = "fe" name = "frontE">Html</li>
<li class = "fe" name = "frontE">Css</li>
<li class = "fe" name = "frontE">javascript</li>

</ul>

<ol>
<li class = "be" name = "backE">Python</li>
<li class = "be" name = "backE">Java</li>
<li class = "be" name = "backE">C#</li>

</ol>*/}
        
//css selector

document.querySelector ('h1')
document.querySelector ('.two')
document.querySelector ('#one')
document.querySelector ("h1[name = 'nm']")

//<li class="fe" name="frontE">Html</li>
//<li class="be" name="backE">Python</li>
//<h1 id="one" class="two" name="nm">arina</h1>-----heading

let firstE = document.querySelector('.fe')
let lastE = document.querySelector('.be')
let headOne = document.querySelector('h1')

console.log(firstE)
console.log(lastE)
console.log(headOne)

let allElementsFE = document.querySelectorAll('.fe')
console.log (allElementsFE)       //give node list

let allElementsBE = document.querySelectorAll('.be')
console.log (allElementsBE)

headOne.addEventListener('click', function(){
    for (let i = 0; i < allElementsFE.length; i++){
        // console.log(i)
        // console.log (allElementsFE[i])
        allElementsFE[i].style .color = "red"
        allElementsBE[i].style.color = "green"
    }

})

/**************************************************************************************************** */

//<h1 id="one" class="two" name="nm">arina</h1>
//<li class="fe" name="frontE">Html</li>
//<li class="be" name="backE">Python</li>

let allLiElements = document.querySelectorAll('li')
console.log(allLiElements)      //give node list
//NodeList(6) [li.fe, li.fe, li.fe, li.be, li.be, li.be]

let allLiElements2 = document.getElementsByTagName('li')
console.log(allLiElements2)    //gives html collection
//HTMLCollection(6) [li.fe, li.fe, li.fe, li.be, li.be, li.be, frontE: li.fe, backE: li.be]

let byId = document.querySelector('#one')
let byId2 = document.getElementById('one')
console.log(byId2)  //retrieve a single HTML element by its id attribute
//<h1 id="one" class="two" name="nm">arina</h1>

let feEl = document.querySelectorAll ('.fe')
console.log (feEl)

let fet2 = document.getElementsByClassName('fe')
console.log(fet2)       //gives html collection
//HTMLCollection(3) [li.fe, li.fe, li.fe, frontE: li.fe]

 let byAttr = document.querySelectorAll("li[name = 'backE']")
 let byAttr2 = document.getElementsByName("backE")
 console.log (byAttr)
console.log (byAttr2)    //give nodes
//NodeList(3) [li.be, li.be, li.be]

//node list----getElementsByName,document.querySelectorAll
//html collection -----getElementsByClassName,getElementsByTagName
//html element ------getElementById






