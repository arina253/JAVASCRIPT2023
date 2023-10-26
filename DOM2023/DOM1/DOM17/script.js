{/*<h1 class="two" id="one" name = "nm">Hello</h1>

<ul>
        <li class = "fruit">Apple</li>
        <li class = "fruit">Mango</li>
        <li class = "fruit">Bnana</li>
        <li class = "fruit">Grapes</li>
    </ul>
    <p id = "three" class = "four five">Para</p>
<button>Add Element</button>*/}

//Different methods of retrieving html element

// document.querySelector('h1')
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('h1[name = "nm"]')

// document.querySelectorAll('li')
// document.getElementById('one')
// document.getElementsByClassName('two')
// documents.getElementsByName('nm')
// documents.getElementsByTagName('li')

/*******************************************************************************************************/

//Working around attributes of class

//<p id = "three" class = "four five" name = "nm">Para</p>

//class

let byThree = document.querySelector('#three')
console.log(byThree)
console.log (byThree.className)      //four five
console.log(byThree.classList.add('six'))     //<p id="three" class="four five six" name="nm">Para</p>
console.log(byThree.classList.remove('five')) //<p id="three" class="four six" name="nm">Para</p>
console.log (byThree.classList.toggle('four'))//remove if present and add if not present
//Returns true if token is now present, and false otherwise.


//attribute

let getAttValue = byThree.getAttribute('id')
console.log(getAttValue)
console.log (byThree.setAttribute('id',"nine"))  //<p id="nine" class="six" name="nm">Para</p>
console.log (byThree.setAttribute('data-cy',"eleOne"))  //<p id="nine" class="six" name="nm" data-cy="eleOne">Para</p>


 
 