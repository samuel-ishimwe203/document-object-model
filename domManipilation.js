// create new element
 const pElem=document.createElement('p')
 pElem.innerText="from nyagatare"
 document.body.appendChild(pElem)
 
 // insert element before

const insertBefor=document.createElement('span')
insertBefor.innerText="I have 22 years old"

const result = document.querySelector("p")
document.body.insertBefore(insertBefor,result)

// remove element or child

const removeelement = document.getElementById('alpha')
const removable = removeelement.children[0]
removeelement.removeChild(removable)

document.getElementById('sam').remove()
        
const toggleInfo=()=>{
    console.log('toggling')

    const para=document.getElementById('paragrap')
    para.classList.toggle('hidden')
}
