//Parallel execution of promises with actual APIs

//https://reqres.in/api/users/2

//Promise.all()
//Promise.race()
//Promise.allSettled()
//Promise.any()

function getSingleUser(id){
   return fetch(`https://reqres.in/api/users/${id}`)
  .then(function(response){
    return response.json
  })
  .then(function(response){
    return response.data
  })
}

function getErrorState(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("Error happen")
        },3)
    })
}


//Program 1

Promise.all([
    getSingleUser(2),
    getSingleUser(3),
    getSingleUser(9)

])
.then(function(users){
    console.log(users)
})
.catch(function(error){
    console.log(error)
})


 //Program 2

// Promise.race([
//     getSingleUser(4),
//     getErrorState()
// ])
// .then(function(response){
//     console.log(response)
// })


//Program 3

// Promise.allSettled([
//     getSingleUser(1),
//     getSingleUser(2),
//     getSingleUser(3),
// ])
// .then(function(response){
//     console.log(response)
// })


//Program 4

// Promise.any([
//     getErrorState(),
//     getErrorState(),
//     getErrorState(),
//     getSingleUser(1),
//     getSingleUser(2),
//     getSingleUser(30)
// ])
// .then(function(response){
//     console.log(response)
// })