var variable1 = true;
var variable2 = false;


if(variable1 === true){
    console.log("variable 1 is true");
} else {
    console.log("variable 1 is false");
}

if(variable1){
    console.log("variable 1 is true");
} else{
    console.log("variable 1 is false");
}

if(variable2 === false){
    console.log("variable 2 is false");
}

if(!variable2){
    console.log("variable 2 is false");
}

// NAV BAR

$(document).ready(function(){

    var navOpen = false;
    console.log(navOpen);
    $('#hamBurger').click(function(){
        $('.navBar').toggleClass('open');
        if(navOpen == false){
            navOpen = true;
        } else {
            navOpen = false;
        }
        console.log(navOpen);
    });

// CHANGING COLOR OF OBJECT ON CLICK

    $("#circle").click(function(){
        if(navOpen == true){
            $("#circle").addClass('red').removeClass('blue');
        } else {
            $("#circle").addClass('blue').removeClass('red');
        }
    })


    var list = [];
    var clickNumber = 0;
    $("#button").click(function(){
        clickNumber++;
        list.push(clickNumber);
        console.log(list);
    })

});

// HTML  ----------------------------------------------------------------------------------------------------------------------

// <div id="ham" class="icon">
//     <i class="fas fa-bars"></i>
// </div>
//
// <div class="navBar">
//
// </div>
//
// <div id="circle" class="circle">
//
// </div>
//
// <button id="button" type="button" name="button">Click Me</button>
