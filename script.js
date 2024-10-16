import fs from "fs"
import http from "http"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url),
      __dirname = dirname(__filename)


const server = http.createServer((request, response) =>{

    console.log('Request was made:' + request.url)

    response.writeHead(200, {"Content-Type": "text/html"}) 

    const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8")

    myReadStream.pipe(response)

})

server.listen(3000, ("127.0.0.1"), () =>{

    console.log('Server is running on port 3000')

})