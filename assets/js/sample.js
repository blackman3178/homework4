var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
  




var listEl = document.querySelector("#question-list");
var questions = [
    {
        question: "what is my name?",
        choices: ["noah","mike","patrice"],
        answer: 0
    },
    {
        question: "what is my uncle?",
        choices: ["noah","miguel","kathy"],
        answer: 8
    },
    {
        question: "what is my name?",
        choices: ["noah","mike","patrice"],
        answer: 0
    },
    {
        question: "what is my name?",
        choices: ["noah","mike","patrice"],
        answer: 0
    },
    {
        question: "what is my name?",
        choices: ["max","jared","neeraj"],
        answer: 0
    }
]



// for (var i = 0; i < questions.length; i++) {
    //     console.log(questions[4].choices[2]);
    // }

var currentIndex = 0; 
var currentQuestion;
function anyFunction () {


    
    currentQuestion = questions[currentIndex];
    var pTag = document.querySelector("#prompt");
pTag.textContent = currentQuestion.question;

listEl.innerHTML = "";
currentQuestion.choices.forEach( function (a, i){
    var button = document.createElement("button");
    button.setAttribute("class", "choice");
    button.setAttribute("value", a);
    button.textContent = i + 1 + ". " + a;
    button.onclick = clickFunction;
    listEl.appendChild(button);
});



}


function clickFunction () {
   // document.querySelectorAll(".choice").addEventListener("click", function() {
        console.log("Messagre");
        currentIndex++;
        anyFunction();
        //pTag.textContent = currentIndex++;
        //currentQuestion = questions[currentIndex];
        //currentQuestion++;

      //  pTag.innerHTML = questions[currentIndex].question;

   // });
}

anyFunction();
// var timer = 3;


// function timerCount() {
//     var setTimeOut = setInterval(function() {
//         timer--;

//        if (timer === 0) {
//            pTag.textContent = currentIndex++;
//            clearInterval(setTimeOut);

//        } 
//     }, 1000);
//     return timer;
// }
// console.log(timerCount());
