import fs from "fs"

fs.mkdir("newFolder", err =>{

    if(err) console.log(err)

    fs.readFile("README.md", "utf-8", (err, data) =>{

        if(err) console.log(err)

        fs.writeFile("newFolder/index.md", data, err =>{

            if(err) console.log(err)

            console.log('File created')

        })

    })

})