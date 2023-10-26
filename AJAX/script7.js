
//Subsequent API
////API ------- listofUsers -----> id ------singleUserinfo call


function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response.data
})
}

function getSingleUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then (function(response){
        return response.data
    })
}

function renderHtml(el){
    document.write(`<h1>${el.first_name}${el.last_name}</h1`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<p>${el.id}</p>`)
    document.write (`<img src = "${el.avatar}">`)
}

// getUserPageWise(2)
// .then (function(data){
//     console.log(data)
//     return data[2]['id']
// })
// .then (function(id){
//     return getSingleUserInfo(id)
// })
// .then (function(obj){
//     renderHtml(obj)
// })


//Second Method
async function getUser(pageNumber){
    let users = await getUserPageWise(pageNumber)
    let id = users[0]['id']
    let singleobj = await getSingleUserInfo(id)
    renderHtml(singleobj)
}

getUser(2)


/********************************************************************************************************* */

/*The renderHtml function is responsible for rendering user information on the HTML page. 
It takes a user object as a parameter and uses the document.write method to add various pieces of user 
data to the page*/

// Explanation of second method
// In this code, the getUser function is called with a pageNumber parameter, and it performs the following 
// tasks:

// It uses await to asynchronously call the getUserPageWise function, which fetches a list of users based
//  on the given page number.

// It then extracts the ID of the first user from the list of users obtained.

// Next, it asynchronously calls the getSingleUserInfo function to retrieve detailed information about the 
// user with that ID.

// Finally, it passes the user information to the renderHtml function to display it on the web page.

// When you call getUser(2), it essentially fetches and displays detailed information about the first user
//  on the second page from the API.