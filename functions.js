// WEBSITE WELCOME

function namePrompt(){
    console.log("this is coming from namePrompt");
    var name = prompt("What is your name?");
    console.log("Hello " + name);
    document.getElementById("welcoming").innerHTML += "<h4>Hello "+name+" , welcome to the site</h4>";
}

// HTML -------------------------------------------------------------------------------------------------------------------------

// <button type="button" name="button" onclick="namePrompt();" >Click Me</button>
// <div id="welcoming">

// ---------------------------------------------------------------------------------------------------------------------------------


var hello;

function onLoad(){
    console.log("running onLoad function");
    hello = "hello There";
    console.log(hello);
    var name = prompt("what is your name?");
    console.log(name);
}

onLoad();
testFunction();
console.log(hello);

function anotherFunction(){
    console.log(name);
}

// USER

function yourName(){
    // console.log("button has been clicked");
    var name = prompt("What is your name?");
    var age = prompt("What is your age?");
    console.log(name);
    welcome(name, age);
}

function guest(){
    var age = prompt("What is your age?");
    welcome("guest", age);
}

function welcome(x, y){
    console.log(x);
    console.log("Hello " + x + " you are " + y + " years old");
}

// VALIDATION

function register(){
    var username = prompt("Please enter a username");
    var usernameValid = validate(username, 4);
    console.log(usernameValid);
    if(usernameValid === false){
        console.log("Your username is invalid");
        return;
    }
    var password = prompt("Please enter a password");
    var passwordValid = validate(password, 6);
    console.log(passwordValid);
    if(passwordValid === false){
        console.log("Your password is invalid");
        return;
    }

    console.log("You are good to go and all registered");

}

function validate(value, minLength, max){
    if(value.length >= minLength){
        return true;
    } else {
        return false;
    }

}

// HTML ------------------------------------------------------------------------------------------------------------------------
//
// <button type="button" name="button" onclick="yourName();">Click Me</button>
// <button type="button" name="button" onclick="guest();">Click Me to be a guest</button>
//
// <button type="button" name="button" onclick="register();">Register here</button>
