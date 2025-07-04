
const handleClick=()=>{
    console.log('why are clicking to me')
}


// add and remove event listerner
const counterBt =document.getElementById("counterBtn")

let counter= 0;
const handleCounter=function() {
    console.log("counter",counter)
    counter++;
}

const greetMe =()=>{
    console.log('Thank you')
}

// add eventListerner can accept more than one function with one button one event
counterBt.addEventListener('click',handleCounter)
counterBt.addEventListener('click',greetMe )
counterBt.removeEventListener('click',handleCounter)
