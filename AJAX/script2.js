//creating a promise - to run async code to run synchronously
//Program 1
let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 1
    if (a == b){
        resolve("Equal")
    }
    else{
        reject("Not equal")
    }
})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})


//Program 2
let pro2 = new Promise(function(resolve,reject){
    let names = "arina"
    if (names.startsWith("a")){
        console.log("pass")
        resolve([11,22,33])
    }
    else{
        console.log("fail")
        reject ([-11,-22,-33])
    }
})
pro2.then(function(a){
    console.log(a)
    console.log(a[0])

},function(b){
    console.log(b)
    console.log(b[0])

})


//Program 3
//Managing reject with catch statement
//Promise with finally block
let pro3 = new Promise(function(resolve,reject){
    let cities = ["jaipur","udaipur","nagpur"]
    if(cities.includes("jaipur")){
        resolve({firstName:"arina",lastName : "joshi"})
    }
    else{
        reject({firstName : "ram",lastName : "shrestha"})
    }
})

pro3
.then(function(obj){
console.log(obj)
let{firstName,lastName} = obj        //Destructuring
console.log(firstName)
console.log(lastName)

})

.catch(function(obj){
    let {firstName,lastName} = obj    //Destructuring
    console.log(firstName)
    console.log(lastName)
})

.finally(function(){
    console.log("I will run anyway")
})

//.then()-keep resolve
//.catch-keep reject


//Program 4
//Chaining then block
let pro4 = new Promise (function(resolve,reject){
    let a = 10
    let b = 10
    if (a == b){
        resolve(true)
    }
    else{
        reject(false)
    }
})

pro4
.then(function(a){
    console.log(a)
    return("hello")
})
.then (function(str){
    console.log(str)        
})

.catch(function(b){
    console.log(b)
})

.finally(function(){
    console.log("I will run anyway")
})


