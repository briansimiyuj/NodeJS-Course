import fs from "fs"

fs.unlink("WRITEME.md", err =>{

    if(err){

        console.log(err)

    }

    console.log('File deleted')

})