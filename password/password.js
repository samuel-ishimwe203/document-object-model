

    const btn=document.getElementById('btn')
    btn.addEventListener('click',()=>{
        const inp=document.getElementById('password')
        const hidden = inp.type==='password'
        inp.type=hidden?'text':'password'

        btn.textContent=hidden?'Hide':'Show'
       
    })


    