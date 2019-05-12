
// IN THE CONSOLE

var question = prompt("What is your name?");
var secondQuestion = prompt("what is your fav colour?");
console.log(question);
console.log(secondQuestion);
console.log("Hello "+question+" your fav colour is "+secondQuestion);

// INNER HTML

var question1 = prompt("What is your name?");
document.getElementById("yourName").innerText = question1;

var question2 = prompt("What is your fav Colour?");
document.getElementById("yourColour").innerText = question2;

var question3 = prompt("What is your fav food?");
document.getElementById("yourFood").innerText = question3;

// HTML

// <h2>What is your name?</h2>
// <p>Your name is <span id="yourName"></span></p>
//
// <h2>What is your favourite Colour?</h2>
// <p>Your favourite Colour is <span id="yourColour"></span></p>
//
// <h2>What is your favourite Food?</h2>
// <p>Your favourite Food is <span id="yourFood"></span></p>

// ------------------------------------------------------------------------------------------------------------------------------
