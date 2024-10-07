import fs from "fs"

const readMe = fs.readFile("README.md", "utf-8", (err, data) =>{
    
    console.log(data)

})