//AJAX---Sync code-runs synchronously,execute one after another
//    ---A---->B----->C
//    ---Async code-runs parallely and do not stop execution
//      -Can be used when there is no dependency.


// function additionA(){
//     console.log("A is printed")
// }

// function additionB(){
//     console.log("B is printed")
// }

// additionA();
// additionB();

// //Program 2

// //async----parallel execution and less time
// function additionC(){
//     //this function will execute after 3 seconds
//     setTimeout(function(){
//         console.log("function c is printed")
//     },3000)
// }

// function additionD(){
//     console.log("function D is printed")
// }

// additionC()
// additionD()      //Though C is called first,D will give output first

//Program 3
//Requirement: user created ===>get id for user ===>get info for user

function getUserInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("get id for user")
    }, 2000)

    setTimeout(function () {
        console.log("get info for user")
    }, 1000)
}
getUserInfo()

//async code -----to execute-------> synchronously??
//call back hell-----drawback-less reusability

function getUserInfo2() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id for user")
            setTimeout(function () {
                console.log("get info for user")
            }, 3000)
        }, 2000)
    }, 1000)
}
getUserInfo2()

//Promises
//solve the problem of call back hell
//helps to execute async code-----to run synchronously 
//in proper manner by removing call back hell
//3 stages of promise-Resolve,pending,Reject


//making the promise
let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 100
    if (a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

    //consuming the promise
    pro.then(function(str){         //pro.then(fn,fn)----pro.then(resolve,reject)
        console.log(str)
    },function(str){
        console.log(str)
    
    })

