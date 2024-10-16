import fs from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url),
      __dirname = dirname(__filename)

const myReadStream = fs.createReadStream(__dirname + "/README.txt", "utf8"),
      myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt")

myReadStream.on("data", (chunk) =>{

    console.log('new chunk received:')

    myWriteStream.write(chunk)

})