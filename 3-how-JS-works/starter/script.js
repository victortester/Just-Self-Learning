///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword




var john = {
    name:'John',
    yearOfBirth:1990,
    test:123,
    calculateAge: function(){
        console.log(this);
        console.log(2018 - this. yearOfBirth);
    }
}

var mike = {
    name:"mike",
    yearOfBirth:1994,
    //calculateAge2 : john.calculateAge()
}




//console.log(mike.test);
//john.calculateAge();
//mike.calculateAge2();

