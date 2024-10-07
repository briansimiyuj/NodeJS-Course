import fs from "fs"

const readMe = fs.readFileSync("README.md", "utf-8")

console.log(readMe)