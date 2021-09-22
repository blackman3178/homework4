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
