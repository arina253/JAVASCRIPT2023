//Parallel execution with async await with actual API

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

function getErrorState() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Error happen")
        }, 3)
    })
}

//With async await

async function PromiseAll() {
    let a = await Promise.all(
        [
            getSingleUser(1),
            getSingleUser(2),
            getSingleUser(3)
        ]
    )
    console.log(a)
}
PromiseAll()

// async function PromiseAllSettled(){
//     let b = await Promise.allSettled([
//         getSingleUser(1),
//         getSingleUser(2),
//         getSingleUser(3),
//         getSingleUser(300)
//     ])
//     console.log(b)
// }
// PromiseAllSettled()

// async function PromiseAny(){
//     let c = await Promise.any([
//         getErrorState(),
//         getSingleUser(2),
//         getSingleUser(3)
//     ])
//     console.log(c)
// }
// PromiseAny()

// async function PromiseRace() {
//     try {
//         let d = await Promise.race([
//             getSingleUser(1),
//             getErrorState()
//         ])
//         console.log(d)
//     }
//     catch {
//         console.log("Error happen")
//     }
// }

// PromiseRace()