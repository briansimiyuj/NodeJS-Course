import http from "http"
import fs from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __fileName = fileURLToPath(import.meta.url),
      __dirName = dirname(__fileName)

const server = http.createServer((request, response) =>{

    console.log('Request was made:' + request.url)
    
    if(request.url === "/" || request.url === "/home"){

        response.writeHead(200, {"Content-Type": "text/html"})

        fs.createReadStream(__dirName + "/index.html").pipe(response)

    }else if(request.url === "/about"){

        response.writeHead(200, {"Content-Type": "text/html"})

        fs.createReadStream(__dirName + "/about.html").pipe(response)

    }

})

server.listen(3000, ("127.0.0.1"), () =>{

    console.log('Server is running on port 3000')

})