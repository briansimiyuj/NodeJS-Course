import http from "http"

const server = http.createServer((request, response) =>{

    console.log('Request was made:' + request.url)

   response.writeHead(200, {"Content-Type": "text/plain"}) 

   response.end('Hello World')

})

server.listen(3000, ("127.0.0.1"), () =>{

    console.log('Server is running on port 3000')

})