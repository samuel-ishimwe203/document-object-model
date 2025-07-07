
const quizData= [
    {
        question: "What does DOM stand for?",
        options:[
            "Document order Model",
            "Data Object Method",
            "Document Object Model",
            "Direct Object Management"
        ],

        correct : 2

    },
    {
        question: "Which method selects by ID?",
        options:[
            "getElementById()",
            "querySelectorAll()",
            "createElement()",
            "none above"
        ],
        correct : 0
    },

    {
        question :"All are types of node accept",
        options:[

            "textNode",
            "comment node",
            "elementNode",
            "tagNode"

        ],
        correct : 3

    }
];


let questions= [...quizData].sort(()=>Math.random()-0.5);
let currentQuestion= 0;
let score=0;
let timer;
let timeleft;
const questionElement=document.getElementById('question');
const optionsElement=document.getElementById('options');
const nextBtn=document.getElementById('next-btn');
const timerEl=document.getElementById('timer');
const resultEl=document.getElementById('result');

function loadQuestion(){
    
    clearInterval(timer);
    timeleft=15;
    updateTimer();
    timer=setInterval(countDown,1000);


    const qus=questions[currentQuestion];
     questionElement.textContent=`Q${currentQuestion +1}. ${qus.question}`;
    optionsElement.innerHTML="";
   

    qus.options.forEach((option,index)=>{
        const btn =document.createElement('button');
        btn.classList.add('option-btn')
        btn.textContent=option;
        btn.addEventListener('click',()=> selectAnswer(index))
        optionsElement.appendChild(btn)
    });
      
    nextBtn.style.display="none";
     
}

function selectAnswer(index){
    const qus= questions[currentQuestion]
     const buttons =document.querySelectorAll('.option-btn')
    buttons.forEach(btn=>btn.disabled= true)
     if(index ===qus.correct){
        score++;
        buttons[index].classList.add("correct")

    }
    else{
         buttons[index].classList.add("wrong")
         buttons[qus.correct].classList.add("correct")
    }

    nextBtn.style.display="inline-block";
}

nextBtn.addEventListener('click',()=>{
   currentQuestion++;
    
   if(currentQuestion<questions.length){
    loadQuestion()
   }  
   else{
    showResult();
      
   }
})
function showResult(){
    nextBtn.style.display="none";
    const highScore=localStorage.getItem("quizHighScore")|| 0;
    const isNew= score>highScore;
    if(isNew){
        localStorage.setItem("quizHighScore",score)
    }
     resultEl.innerHTML=` <h3>Wow!!! Quiz complited<h3> 
     <p> You have score ${score} out of ${questions.length} questions </p>
     <p>Highest Score : ${Math.max(score,highScore)}</p>
     ${isNew ?"<p>Hey,New High Score!</p>":""}
     <button onclick="location.reload()"> Restart Quiz</button>`    
}

function countDown(){
timeleft--;
updateTimer();
if(timeleft===0){
    clearInterval(timer)
    selectAnswer(questions[currentQuestion]?.correct)

}
}

function updateTimer(){
    timerEl.textContent=`${timeleft}`
}
loadQuestion()

