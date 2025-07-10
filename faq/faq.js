const faq = document.querySelector(".faq");

faq.addEventListener("click", function (e) {
  // Make sure the click was on a question
  const question = e.target.closest(".question");
  if (!question) return;
  e.stopPropagation()

  // Get the .faq-item container
  const currentItem = question.parentElement;

  // Get the .answer inside it
  const currentAnswer = currentItem.querySelector(".answer");

  // Toggle the .show class
  currentAnswer.classList.toggle("show");
});
  

// document.addEventListener('click',function(e){
//     const allAnswer =document.querySelectorAll(".answer.show")

//     allAnswer.forEach(answer=>answer.classList.remove('show'))
// })
