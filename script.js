import EventEmitter from "events"
import util from "util"

class Person{

    constructor(name){

        this.name = name

    }

}

util.inherits(Person, EventEmitter)


const ben = new Person('Ben Franklin'),
      tom = new Person('Tom Hanks'),
      mary = new Person('Mary Poppins'),

      people = [ben, tom, mary]

people.forEach(person =>{

    person.on("speak", (message) =>{

        console.log(person.name + ' said: ' + message)

    })

})

ben.emit("speak", 'Hello, I am Ben Franklin')
tom.emit("speak", 'Hello, I am Tom Hanks')
mary.emit("speak", 'Hello, I am Mary Poppins')