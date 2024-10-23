import express from "express"

const app = express()

app.listen(3000, () =>{

    console.log('Server is running on port 3000')
   
    app.get("/", (request, response) =>{

        response.send('Hello World')

    })

    app.get("/about", (request, response) =>{

        response.send('This is the about page')

    })


    app.get("/profile/:id", (request, response) =>{

        response.send('This is the profile page for user with id ' + request.params.id)

    })

})