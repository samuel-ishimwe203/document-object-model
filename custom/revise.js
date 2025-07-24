const faq = document.querySelector('.faq')
 faq.addEventListener('click',(e)=>{
    const question=e.target.closest('.qustion')
    if(!question)return;
    e.stopPropagation()

    const currentItem=question.parentElement
    const currentAnswer=currentItem.querySelector('.answer')
    
    currentAnswer.classList.toggle("show")
 })