var itemList = ["Item 1" , "Item 2", "Item 3", "Item 4", "Item 5"];

// ADDING ARRAY TO LIST

itemList.push("Item 6");

// EDITING ARRAY ITEM

itemList[2] = "This has been edited";
console.log(itemList)

itemList[10] = "Item 7";
console.log(itemList);
console.log(itemList.length);
console.log(itemList[4]);

// REMOVING ARRAYS FROM LIST

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2,1);
console.log(arr);
console.log(removed);

// SHOPPING LIST

var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges", "Dates"];

document.write("<h1>This is my shopping List</h1>");
var shoppingList = ["Apples", "Bananas", "Pears", "Kiwi Fruit", "Oranges", "Dates"];

document.write("<h1>This is my shopping List</h1>");

document.write("<ul>");
    for (var i = 0; i < shoppingList.length; i++) {
        document.write("<li>" + shoppingList[i] + "</li>");
    }
document.write("</ul>");

// DAILY TASKS

var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];
var tasks = [
    ["Cleaning"],
    ["Homework", "something else", "Shopping"],
    ["Work", "Gym"],
    [],
    ["Cleaning", "Go to the pub"]
];

console.log(days[1]);
console.log(tasks[1][1])
// OR
console.log(days);
console.log(tasks);

document.write("<h2>Daily Tasks</h2>");

document.write("<ul>");
    for (var i = 0; i < days.length; i++) {
        document.write("<li>" + days[i]);
            document.write("<ul>");
                if(tasks[i].length === 0){
                    document.write("<li>Well done, you have no tasks today</li>");
                } else {
                    for (var a = 0; a < tasks[i].length; a++) {
                        document.write("<li>" + tasks[i][a] + "</li>");
                    }
                }
            document.write("</ul>");
        document.write("</li>");
    }
document.write("</ul>");
