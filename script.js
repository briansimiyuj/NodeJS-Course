import express from "express"
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express(),
      __fileName = fileURLToPath(import.meta.url),
      __dirName = dirname(__fileName)


app.set("view engine", "ejs")

app.listen(3000, () =>{

    console.log('Server is running on port 3000')
   
    app.get("/", (request, response) =>{

        response.render("index")

    })

    app.get("/about", (request, response) =>{

        response.render("pages/about")

    })


    app.get("/profile/:name", (request, response) =>{

        const data ={ 
            age: 29, 
            job: "Web Developer", 
            hobbies: ["Coding", "Gaming", "Reading"] 
        }

        response.render("pages/profile", { person: request.params.name, data })

    })


    app.get("/contact", (request, response) =>{

        console.log('This is a middleware')

        response.send('Contact page')

    })

})