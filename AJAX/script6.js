let buttonA = document.querySelector('button')
consolelog(buttonA)

function getUsers(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            response.data.forEach(el => {
                document.write(`<h1>${el.first_name}${el.last_name}</h1`)
                document.write(`<p>${el.email}</p>`)
                document.write(`<p>${el.id}</p>`)
                document.write(`<img src="${el.avatar}">`)      //img donot have closing tag
            });
        })
}

// getUsers(2)
buttonA.addEventListener('click', function () {
    getUsers(1)
})


//API hit--------fetch()---------Always return promise-----------Can consume promise-------Print

//Next day
//API ------- listofUsers -----> id ------singleUserinfo call


