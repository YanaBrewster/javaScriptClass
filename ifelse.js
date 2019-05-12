// When the child is under, or 5 there is no charge.
// For children who are older than 5 then the charge is $3.

var childAge = prompt("how old is your child");
if(childAge > 5){
    console.log("you are charged $3");
} else {
    console.log("there is no charge");
}

// If someone earns more than $100 they pay tax at 10% of gross.
// For less than this, tax is charged at 9% of gross.
// What is the amount of tax

var earnings = prompt("How much did you earn?");
if(earnings > 100){
    var tax = earnings * 0.10;
    console.log("you have to pay $" + tax + " tax")
} else {
    var tax = earnings * 0.09;
    console.log("you have to pay $" + tax + " tax")
}

// When the mark is more than 49 the person gets a A grade.
// When the mark is less the person gets an F grade.

var mark = prompt("what was your grade?")
if(mark == 0){
    console.log("You got a F");
} else if(mark < 30){
    console.log("you got a C")
} else if(mark < 60){
    console.log("you got a B")
} else {
    console.log("you have passed");
}

// When the cost of the meal is more than $100
// there is no service charge. For other meals the service charge is 10%
// There are 3 people at your table all ordering different meals (3 prompts)
// Show the price for all 3 and then the total

var person1 = parseInt(prompt("how much is person 1's meal?"));
if(person1 < 100){
    person1 = (person1 * 0.10) + person1;
}

var person2 = parseInt(prompt("how much is person 2's meal?"));
if(person2 < 100){
    person2 = (person2 * 0.10) + person2;
}

var person3 = parseInt(prompt("how much is person 3's meal?"));
if(person3 < 100){
    person3 = (person3 * 0.10) + person3;
}

console.log("Person 1 Spends $" + person1);
console.log("Person 2 Spends $" + person2);
console.log("Person 3 Spends $" + person3);
var total = person1 + person2 + person3;
console.log("The total cost is $"+total);

// Steak dinners are $25.60 each, for every 2 full price steaks you get a third for free, (you will aways get the third)
// Get the quantity as input, and output the total price, and the number of free steaks!
// Bonus:
// Mushroom sauce is an extra $2, but the free steaks don't get free sauce.
// Get the number of mushroom sauce servings as another input, and adjust the total.

var numberOfSteaks = parseInt(prompt("How many steaks are you ordering?"));
var steakPrice = 25.60;
var numberOfFree, totalNumberOfSteaks, totalPrice;

if(numberOfSteaks % 3 === 0){
    numberOfFree = numberOfSteaks / 3;
    totalNumberOfSteaks = numberOfSteaks;
} else {
    var remainder = numberOfSteaks % 3;
    var numberOfPaid = numberOfSteaks - remainder;
    totalNumberOfSteaks = numberOfSteaks;
    numberOfFree = numberOfPaid / 3;
    if(remainder === 2){
        console.log("You get a free Steak no matter what");
        totalNumberOfSteaks++;
        numberOfFree++;
    }
    console.log(remainder);
}
totalPrice = (totalNumberOfSteaks - numberOfFree) * steakPrice;

console.log("You have recieved " + totalNumberOfSteaks + " of steaks");
console.log("You get " + numberOfFree + " free Steaks");
console.log("Your total price is $" +totalPrice);
