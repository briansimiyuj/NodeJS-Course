import express from "express"
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express(),
      __fileName = fileURLToPath(import.meta.url),
      __dirName = dirname(__fileName)

app.listen(3000, () =>{

    console.log('Server is running on port 3000')
   
    app.get("/", (request, response) =>{

        response.sendFile(__dirName + "/index.html")

    })

    app.get("/about", (request, response) =>{

        response.sendFile(__dirName + "/about.html")

    })


    app.get("/profile/:id", (request, response) =>{

        response.send('This is the profile page for user with id ' + request.params.id)

    })

})