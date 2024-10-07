import fs from "fs"

const readMe = fs.readFile("README.md", "utf-8", (err, data) =>{
    
    fs.writeFile("nodejs.txt", data, err =>{

        if(err){

            console.log(err)
 
        }

    })

})