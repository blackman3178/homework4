var startButton = document.querySelector("#startQuiz");
var timerElement = document.querySelector("#time");
var listEl = document.querySelector("#question-list");

//^^ declare initial variables from HTML


// create questions class to be reused for each question
class Question{
    constructor(prompt, answers = [], correct) {
        this.prompt = prompt;
        this.answers = answers;
        this.correct = correct;
    }
}

//declare question objects using the Question class.
var question1 = new Question("Commonly used data types DO NOT include: ", "strings,booleans,alerts,numbers".split(","),2);

var question2 = new Question("The condition in an if / else statment is enclosed within...", "quotes,curly brackets,parenthesis,square brackets".split(","), 2);

var question3 = new Question("Arrays in JavaScript can be used to store...", "numbers & strings,other arrays,booleans,all of the above".split(","), 3);

var question4 = new Question("String values must be enclosed within ___ when being assigned to variables", "commas,curly brackets,quotes,parenthesis".split(","), 2);

var question5 = new Question("A very useful tool used during the development & debugging for printing content to the debugger is: ", "JavaScript,terminal/bash,for loops,console log".split(","), 3);

var questionArray = [question1, question2, question3, question4, question5];

console.log(questionArray);


// function to clear the startpage and starts the questions 
function clearStartPage() {
    var startPage = document.querySelectorAll(".start-page");
    for (var i = 0; i < startPage.length; i++) {
        startPage[i].setAttribute("style", "visibility: hidden;");
    }
    askQuestions();
}
// clears start page when the start quiz button is clicked.;
startButton.addEventListener("click",clearStartPage);

function startQuiz() {
    var i = 0;
    var pTag = document.querySelector("#prompt");
    var quizPage = document.querySelectorAll("#hiddenByDefault");

    //shows the elements hidden by default 
    for ( var j = 0; j < quizPage.length; j ++) {
        quizPage[j].setAttribute("style", "visibility: visible;");
    }

    pTag.innerHTML = "hi there";
    // gets the string variables from the array within the questions object and appends them to the ol element in the HTML
    // while(i < questionArray.length) {
    //     pTag.innerHTML = questionArray[i].prompt;
    //     for ( var n = 0; n < questionArray[i].answers.length; n ++) {
    //         var li = document.createElement("li");
    //         listEl.appendChild(li);
    //     }
    // }
}
