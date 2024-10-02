/* setTimeout(function(){

    console.log('3 seconds have passed');

}, 3000) */

let counter = 0

/* setInterval(function(){

    counter++

    console.log(counter)

}, 2000) */


const timer = setInterval(function(){

    counter++

    console.log(counter)

    if(counter >= 5){

        clearInterval(timer)

    }

}, 2000)