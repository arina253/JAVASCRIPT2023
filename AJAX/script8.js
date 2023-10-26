//list of user----------- id-------------single user API

//2--------sec
//https://reqres.in/api/users/2
//https://reqres.in/api/users/3
//https://reqres.in/api/users/4
//https://reqres.in/api/users/5
//https://reqres.in/api/users/6

//Parallel execution is possible when there is no dependency.
//Can be done by four ways:
//1. Promise.all()
//2. Promise.allSettled()
//3. Promise.race()
//4. Promise.any()

//Task: Parallel execution of multiple async operations 1) with then block
     // 2)With async await
     // 3)With actual APIs


//Program 1: with then block( with dummy API )

// function fetchData(id){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if (id % 2 == 0){
//                 resolve("Pass")
//             }
//             else{
//                 reject("Fail")
//             }
//         },1000)
//     })
// }


// Promise.all([fetchData(4),fetchData(4),fetchData(10)])
// .then (function(result){
//     console.log(result)
// })
// .catch(function(fail){
//     console.log(fail)
// })

//Promise.all() accepts an array of promises as input and
// returns a new promise that resolves when all of the input promises have resolved 
//or rejects when any of the input promises is rejected.

/************************************************************************************************* */


function fetchData(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (id % 2 == 0){
                resolve ("Pass 1")
            }
            else {
                reject ("Fail 1")
            }
        },1000)
    })
}

function fetchData2(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (id % 2 == 0){
                resolve ("Pass 2")
            }
            else {
                reject ("Fail 2")
            }
        },2000)
    })
}


function fetchData3(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (id % 2 == 0){
                resolve ("Pass 3")
            }
            else {
                reject ("Fail 3")
            }
        },3000)
    })
}


//Promise.race()

// Promise.race([fetchData(4),fetchData2(5)])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

//Promise.race() resolves or rejects as soon as one of the input promises resolves or rejects.
//Whichever output comes first will show though pass/fail.EG:Stock exchange


//Promise.allSettled()

// Promise.allSettled([fetchData(3),fetchData2(5), fetchData3(8)])
//     .then(function(result){
//         console.log(result)
//     })


//Promise.allSettled() waits for all promises to be settled (either resolved or rejected),
// and then it provides information about the status of each promise.
//**return all resolve  and reject state 


//Promise.any()

Promise.any([fetchData2(3),fetchData2(5),fetchData3(9),fetchData(7),fetchData2(4)])
.then(function(result){
    console.log(result)
})
    

//Promise.any() resolves when at least one of the promises in the input array resolves 
//and rejects only when all the promises reject.
//do not consider reject state

