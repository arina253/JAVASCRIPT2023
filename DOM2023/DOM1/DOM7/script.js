// selecting the element 
// <h1 id = "one" class = "two" name = "three">Chinmay</h1>

headOne = document.querySelector('h1')
console.log(headOne)

headOne.addEventListener('click',function(){
    headOne.style.color = "red";
    headOne.style.backgroundColor = "yellow"
})

// example 

let info = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}
info.parent.mother = "kanchan s deshpande"