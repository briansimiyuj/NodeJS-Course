import fs from "fs"

fs.rm("newFolder", { recursive: true }, err =>{
   
    if(err) console.log(err)

    console.log('folder deleted')

})