var startButton = document.querySelector("#startQuiz");
var timerElement = document.querySelector("#time");

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

console.log(question5);