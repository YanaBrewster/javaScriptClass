var carType;
var carColour;
var carYear;

var car = {
    type: 'Honda',
    colour: 'red',
    year: 2009,
    warrent: false,
    owners: ['Sam', 'Jack', 'Jess']
}
// console.log(car);
// console.log(car.year);
// console.log(car['year']);
// car.year = 2019;
// console.log(car);
// console.log(car.year);
//
// car.km = 10000;
// console.log(car);

var items = [
    {
        name: 'Apples',
        price: 2.50,
        inStock: true
    },
    {
        name: 'Oranges',
        price: 1.45,
        inStock: false
    },
    {
        name: 'Pears',
        price: 3.00,
        inStock: true
    }
];

for (var i = 0; i < items.length; i++) {
    // console.log(items[i]);
    if(items[i].inStock === true){
        document.getElementById('list').innerHTML += '<li>' + items[i].name + ' - $' +  items[i].price+'</li>';
    }
}


var days = [
    {
        day: 'Monday',
        tasks: ['Cleaning', 'Shopping']
    },
    {
        day: 'Tuesday',
        tasks: ['Homework']
    },
    {
        day: 'Wednesday',
        tasks: ['Work', 'Gym', 'Take out Rubbish']
    }
];

for (var i = 0; i < days.length; i++) {
    console.log(days[i].day);
    // console.log(days[i].tasks);
    for (var a = 0; a < days[i].tasks.length; a++) {
        console.log(days[i].tasks[a]);
    }

}

// HTML----------------------------------------------------------------------------------------------------------------------------

        // <ul id="list">
        //
        // </ul>
