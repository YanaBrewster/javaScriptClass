# javaScriptClass
Collation of the teachers code covering what we have learnt so far in class

JavaScript Notes

JavaScript must be written in order - read from top to bottom
Recommended to have less JavaScript to be triggered onload();
If elements were not there on the initial load they won’t be there when you add it in because that element didn't exist when the page first loaded - so it won’t be showing on the page
Use paper to help plan steps in jQuery/js as well as flowchart for documentation
Time is an event
Talk aloud when planning diagrams


Loops - repeating tasks
Functions - small amount of program/code that is called when needed via page interaction
Variable - storing data
Debug
Console.log, prompts and alerts should be removed before going live, only used as a developer tool
Use console.log alot! After every calculation 
NaN = not a number
Inserting into HTML 
onclick="functionName();”
.innerHTML  use inside the <div> tags
In HTML when writing out a string add “+” at the front and end. i.e: '<h5 class="card-title">'+movie.title+'</h5>'; 
document.write cannot be used to add new data onto page once page has loaded
inner.text only renders text so no HTML tags will work 
appendChild - append means add to the end
Strings
Quotes only for text (a string)
A string is a block of text
String will be black, number will be blue
Add in space manually to strings
Variables
No spacing should be used for variable names
Numbers can’t be at the start of a variable name
Follow a naming convention - camelcase etc. 
Can’t use dashes, can use underscores
var only needs to be declared once
You can declare var on one line - seperate each var with a comma;
Don’t change the ids name once it has been created

Operators
= will always declare
= after will override
+= adds to what is already there
++ adds one to current number
-- subtracts from current number
== comparing 2 values together
=== comparing 2 values together and making sure they are the same type
!= does not equal
!== does not equal or does not equal the same type

Notes:
Concatenating - including the “=” or “+” between 2 different data types. Joining things together.
 “=” or “+”  to the exact same data type
For multiplication use * instead of x
+ and - are calculated after  *(x) and /. Example of using *(x)  or / first; total = (2+4) * 10
Booleans
Boolean only has 2 values; true or false. Does not need quotes
Array
Array is a list of other data types / stored values. [ ] means an array.
Seperate arrays with a “,”
The first entry is 0 
splice - doesn’t remove but takes a copy of the array
Loop
When nesting within a for loop, make sure to change the var ‘[i]’ is given a new name like‘[a]’ - they id needs to be different from one another  
break; breaking the loop early. Only used in a loop or switch
continue; does not break but stops here and starts the next iteration 
for (initial value; final value; increment{ }
for (i = 0; i< fruits.length, i++)
i++
i= i+1
i=0 +1=1
In a loop, do not use greater than (>) unless you have a break or else
Give [i] specific name in loops to avoid confusion
document.getElementById('exampleList').innerHTML = ""; restarts the loop
Function
A function is a block of reusable code
If a var is declared in a function it is only locally registered
Write/declare all global variables at the top of the page, even if they don’t have a value yet. Do this if the var is reusable. If not, keep var within the function (local). If you move local to global - remove var from the function.
ids must have a unique identifier even if writing the same functions to see which one is more effective. 
Stating the function name outside of the function calls the function

Notes:
Javascript is very hackable. If it vars are global - it can be editable
Return
return finishes/ends/leaves the function then and there. return always means true. return is used in place of a if/else. It doesn’t need a value. 
If and else 
Can write more than 2 if/else statements in a function -  must return after each if/else or could make loading time longer. Just avoid infinite loops.
Objects
Objects is a collection of data types that hold other data types. Objects have {}. Arrays have []
Books - remember to include ISBN in a book object

Dataset
data - x you can name it what you want in place of x
data-id="'+movie.id+'"
dataset gets data from value
dataset is a object

This
console.log(this.classList); lists the classes of an element
this.classList.add(newClass); add a new class
console.log(this.classList.contains('active')); true or false outcome
console.log(this.classList.item(0)); selects item in array
 this.classList.remove('active'); removes class
 this.classList.toggle('active'); switching from one state to another

JQuery 
addClass() / removeClass()
toggleClass()
Order is of code important, “chaining” - adding to previous element
Don’t select the <div> to change as changes will apply to every single <div>
append() is used to insert content at the end of an element/<div>
attr() is used to set or get the attribute of an element, ie: attr(‘id’) to give /change it attr(‘id’, ‘images/example.jpg’)
You can get what is already there or replace what is already there with something else
blur() is an event not a selector, whenever you click out/leave the input field 
change()when something has changed it’s value, ie; live validation in a form.
children()- selecting children of parent elements 
click() - click to trigger an event or change 
clone() - takes a shallow copy of element to use later, original element will not be changed
closest()gets you the closest element 
css() change css on an element
data() the same as data-set. Gets data. 
dblclick()double click
delay()if you want to append a delay onto an element
each()the same as a for loop
empty()makes the element empty/nothing
event()to be used when event element is interacted with (an event) and records/gets metadata about the interaction with element. event.preventDefault() stops the default action on submitting from happening
fadeIn()
fadeOut()
fadeToggle()
find()searches for anything that it can find within stated element 
first() gets first element/ item
focus() opposite of blur()often used together. focus() used when you want to click into an input form/etc. focusin() is the same
focusout() is the same as blur()  
hasClass() does it have a class or not?
height()gets the height of the element itself in px - the height can be changed in between (), ie: height(500)including border and padding. 
hide()
hover()- only computers mouse can hover
html()is the same as .innerhtml ie; html(<p>Hello</p>)
innerHeight() includes padding but not the border or margin
innerWidth() includes padding but not the border or margin. Giving a value will change the inner width etc
keyup() an event that triggers when you press on your keyboard
keydown()
keypress()
length() 
mousedown()
mouseenter()
mouseleave()
mousemove()
mouseout()
mouseover()
mouseout()
parent()gets parent element also parents()giving you multiple 
prepend()add element to the start/top. It’s the opposite of append
ready()the document will run when it’s ready. Like a loading screen. Add all JavaScript into ready function. 
removeClass() removes a class
show() turns from display none to block
submit()to submit something 
text()like how you use innerText.html 
toggle() on/off
toggleClass()
val()to get the value/content of an input field, text area, radio button etc
width()gives the width of the element
Plugins
Swiper for slideshows
MixItUp 3 for animated filtering system
A plugin heavy site will make page loading take longer

Extensions
jQuery UI is an extension - images must be put in CSS folder
https://api.jqueryui.com/
 https://jqueryui.com/checkboxradio/
Owl Carousel 2 https://owlcarousel2.github.io/OwlCarousel2/


Google Maps
https://developerhttps://developers.google.com/maps/documentation/javascript/tutorials.google.com/maps/documentation/javascript/tutorial 

Different key for each project
Do not select every single key
Maps Javascript API
Do not put API key on GitHub
Restrict keys via IP address
https://www.latlong.net/
Search “what is my ip” to find ip address
Map needs both center and zoom
To style :https://developers.google.com/maps/documentation/javascript/style-reference
https://developers.google.com/maps/documentation/javascript/reference/map
Make sure styles are in order
You must restrict each new API added to a key
You would add else if statements to all DirectionsStatus responses - https://developers.google.com/maps/documentation/javascript/directions#DirectionsStatus
Use Client side of Google maps
Restrict key under credentials
Some keys have their own library to add onto the script on HTML 
Once map is finished comment out the map script

Bootstrap and Sass

Cannot use a CDN
Use source files when downloading, copy scss files into our project
New folder in scss called bootstrap
Place new variables before bootstrap import. Must have !default after variable to change variable properties
























