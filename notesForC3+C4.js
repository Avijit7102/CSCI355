//Variable Assignment

let a = 10;
let b = a;

a = 20;

console.log(b); // Prints 10, because b is a copy of a at the time of assignment

//Pass by copy of a reference 

let obj1 = {name: 'Alice'};
let obj2 = obj1; // copies the reference not the object

obj1.name = 'Bob';
console.log(obj2.name) // Prints Bob, because obj1 and obj2 reference the same object

// Functions as Objects

let add = function(a,b) {
    return a+b;
}
console.log(add(2,3)); // It will call the function add and print 5

// Shallow Copy

let original = {item1: 'value1', item2: 'value2'};
let copy = {...original};
original.item1 = 'new value';
console.log(copy.item1);

//Global Scope:

function setGlobalVariable(){
    globalVar = 'I am global';
}
setGlobalVariable();
console.log(globalVar); //It prints 'I am global' because of global scope.

// Function scope:

function demoFunctionScope(){
    let functionVar = 'I am local';
}
demoFunctionScope();
//console.log(functionVar); //Error: functionVar is not defined, because functionVar is defined inside the function scope. So from outside of the function we can not trace it.


// Block Scope:

function myFunc(){
    if (true){
        var x = 10;
    }
    console.log(x);
}
myFunc();
{
    var x = 10;
    let y = 20; 
}
console.log(x);
//console.log(y); //Error: If a variable declared with let, have block scope, meaning they are scoped to block in which they are defined.


// Closer


function outer(){
    var a = 10;
    var b = 20;

    function inner(c) {
        //inner function takes an argument c. it can access variable a, b
        var d = 40;
        return `${a}, ${b}, ${c}, ${d}`
    }

    return inner;  // the outer function returns the inner function
}

var i = outer(); // i stores the return value, that means i now holds the inner function, outer function has executed, but the inner function has not been called yet.
var j = i(30); // now we call the inner function, which is stored in the variable i , with the argument 30, so c is the argument we passed, which is 30.

console.log(j);

// setTimeOut

/* {
    let i;
    for(i = 0 ; i < 10 ; i++){
        setTimeout(() => console.log(i), 500);
    }
}
console.clear(); */
// Methods:

let sc = 'school';
console.log(typeof sc.toUpperCase()); // prints function
console.log(sc.toUpperCase()); // print : SCHOOL

// Arrays and Methods:

let num = [1, 2, 3];
num.push(4);
num.push(5);
console.log(num); // output: [1, 2, 3, 4, 5]
console.log(num.pop()); // output: 5
console.log(typeof num);
