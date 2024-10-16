import fs from "fs"
import http from "http"


const server = http.createServer((request, response) =>{

    console.log('Request was made:' + request.url)

    response.writeHead(200, {"Content-Type": "application/json"}) 

    const myObj = { name: 'Rolf', job: 'Instructor', age: 25 }

    response.end(JSON.stringify(myObj))

})

server.listen(3000, ("127.0.0.1"), () =>{

    console.log('Server is running on port 3000')

})