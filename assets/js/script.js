var startButton = document.querySelector("#startQuiz");
var timerElement = document.querySelector("#time");
var listEl = document.querySelector("#question-list");

var counter = 0;
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

console.log(counter);


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

// gets all of the html elements that were hidden to start & makes them visible, then calls the showQuestions function.
function askQuestions() {
    var quizPage = document.querySelectorAll(".hiddenByDefault");
    
    
    //shows the elements hidden by default 
    for ( var j = 0; j < quizPage.length; j ++) {
        quizPage[j].setAttribute("style", "visibility: visible;");
    }
    if( counter <=3){ // TODO: how to update the counter & iterate through the questions
        showQuestions(counter);
        var winOrLoss = getWin();
        console.log(counter)


        // TODO: if get win is returns false, then subtract time from the timer.
    } else {
        finishGame() // maybe use time as a variable to input there
    }
}

// displays the prompt, creates the li elements holding the answers, and sets the correct or incorrect attribute
function showQuestions(x) {
        var pTag = document.querySelector("#prompt");
        pTag.setAttribute("style", "visibility: visible;");

        //pTag.innerHTML = questionArray[2].prompt;
        // for (var n = 0; n < questionArray.length;) {
        //     pTag.innerHTML = questionArray[n].prompt;
        pTag.innerHTML = questionArray[x].prompt;

            for (var i = 0; i < 4; i++) {
                var li = document.createElement("li");
                li.setAttribute("class", "list-item");
                li.innerHTML = questionArray[x].answers[i];
                if (i === questionArray[x].correct) {
                    li.setAttribute("data-correct", "correct");
                } else {
                    li.setAttribute("data-correct", "incorrect");
                }
                listEl.appendChild(li);
            }
    }

function getWin( ) {
    var result = null;
    var announcement = document.createElement("p");
    listEl.appendChild(announcement);
    listEl.addEventListener("click",function(event) {
        var element = event.target;
        var state = element.getAttribute("data-correct");
        if (state === "correct") {
            result = true;
            announcement.innerHTML = "That was Correct!";
        } else {
            result = false;
            announcement.innerHTML = "That was False!";
        }
        setTimeout (function() {
            announcement.innerHTML = "";
            counter = counter + 1;
            console.log(counter);
            removeAll();
            nextQuestion();
        }, 3000);


    });
    return result;
}

// removes the previous question content.
function removeAll() {
    while (listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
    }
}

function nextQuestion (){
    var pTag = document.querySelector("#prompt");
    pTag.innerHTML = questionArray[counter].prompt;
    for (var i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.innerHTML = questionArray[counter].answers[i];
        if (i === questionArray[counter].correct) {
            li.setAttribute("data-correct", "correct");
        } else {
            li.setAttribute("data-correct", "incorrect");
        }
        listEl.appendChild(li);
    }
    if (counter < 4) {
        getWin();
    } else {
        finishGame();
    }
}

function finishGame () {
        console.log("ghame is over!!!");
}
    


    // while(i < questionArray.length) {
    //     pTag.innerHTML = questionArray[i].prompt;
    //     for ( var n = 0; n < questionArray[i].answers.length; n ++) {
    //         var li = document.createElement("li");
    //         listEl.appendChild(li);
    //     }
    //     i = i + 1;
    // }

