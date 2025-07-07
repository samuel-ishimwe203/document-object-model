
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

const questionElement=document.getElementById('question');
const optionsElement=document.getElementById('options');
const nextBtn=document.getElementById('next-btn');
const timerEl=document.getElementById('timer');
const resultEl=document.getElementById('result');

function loadQuestion(){
    
    const qus=questions[currentQuestion];
     questionElement.textContent=`Q${currentQuestion +1}. ${qus.question}`;

   

    qus.options.forEach((option,index)=>{
        const btn =document.createElement('button');
        btn.classList.add('option-btn')
        btn.textContent=option;
        optionsElement.appendChild(btn)
    });

     
}

loadQuestion()

