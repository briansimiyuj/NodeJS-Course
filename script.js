import EventEmitter from "events"

const myEmitter = new EventEmitter()

myEmitter.on("someEvent", (message) =>{

   console.log(message)

})

myEmitter.emit("someEvent", "The event was emitted")   