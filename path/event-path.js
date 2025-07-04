
// in event bubbling , the events starts from target elements and bubbles through up to the ancestors.
// the flow is : child - parents - grandparents - documents


document.getElementById('grandParent').addEventListener('click',function(){
    console.log('parent document is clicked')
})

document.getElementById('parent').addEventListener('click',function(){
    console.log('parent is clicked')
})

document.getElementById('child').addEventListener('click',function(){
    console.log('child is clicked')
})

// for capturing events starts from top to the target element

document.getElementById('grandParent').addEventListener('click',function(){
    console.log('parent document is clicked')
},true)

document.getElementById('parent').addEventListener('click',function(){
    console.log('parent is clicked')
},true)

document.getElementById('child').addEventListener('click',function(){
    console.log('child is clicked')
},true
)

// event delegation is technique where you attach single events listener to the parent element to handle events from its child element through event bubbling.

   document.getElementById('itemList').addEventListener('click',(event)=>{
         
    if(event.target.tagName==="LI"){

        console.log(`You clicked on ${event.target.textContent}`)
    }

   })

