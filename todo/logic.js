function addTask(){

   const taskInput=document.getElementById('taskInput')
    const taskList=document.getElementById('taskList')

    const task= taskInput.value;
    if(task.trim()==="")return;
     
    const li=document.createElement('li')
    li.innerText=task;

    const completeBtn=document.createElement('button')
      completeBtn.innerText='complete'
      completeBtn.style.marginLeft='50px'
      completeBtn.onclick=function(){
        li.classList.toggle('complete')
      }
         li.appendChild(completeBtn)


           const deleteBtn=document.createElement('button')
      deleteBtn.innerText='delete'
      deleteBtn.style.marginLeft='50px'
      deleteBtn.onclick=function(){
        li.remove()
      }
         li.appendChild(deleteBtn)

     taskList.appendChild(li)

   taskInput.value=""
     
    
}