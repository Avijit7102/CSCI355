console.log("hello world");
// Data types are: 
//number
//string

console.log("Hello");
console.log('Hello');

console.log(`There are ${5+7} cats in the basket`);


//Boolean
// true or false

console.log(5 > 1);
//undefined


//BigInt - not covered
//Symbol - not covered
// null *

// null is object. ---> does not exist

// undefined 

// all numbers in JS are floats

// declaring variables-- using let, var, global, const

// let x;
// typeof x;

// console.log(typeof x);

// typeof helps to find the data type of variable. If we use let x = 5, typeof will be number.

//const --- you can not change later.

// let constr = (str) => ({n: str});

// let myObj = constr("Hello")

// console.log(myObj);

function addBigNumbers() {
    let aaaaaaaaaaaaaaaa = 9;
    let bbbbbbbbbbbbbbbb = 1;
    let cccccccccccccccc = 2;

    return aaaaaaaaaaaaaaaa + bbbbbbbbbbbbbbbb + cccccccccccccccc;
}

//console.log(addBigNumbers);


//Type of Operator

let n = 4;
let s = "Hello";
let st = new String(s);

console.log("TypeOf a is : " + typeof n);
console.log("TypeOf s is : " + typeof s);
console.log("TypeOf st is : " + typeof st);


//string literal template:

let a = 3, b = 6;
console.log(`Sum is : ${a+b}`);

// string length

let str = "Hello";
console.log("length of word 'Hello' is: " + str.length);


// eval()

let expression = "2+2";  // "2+2" is string
let result = eval(expression);

console.log(result); // Output: 4
console.log(typeof expression);

//Function

function greet(name) {
    return "Hello, "+ name;
  }

let greeting = greet("John");

console.log(greeting);

//Anonymous Function

const sum = function(a, b) {
	return a + b;
};
let res = sum(3,4);
console.log(res);

// function of function

function calculate(operation, x, y) {
    return operation(x, y);
}
  
function add(a, b) {
    return a + b;
}
  
let result1 = calculate(add, 3, 4); // Pass 'add' function as an argument

console.log(result1);

//Array

let arr = [1, 2, 3, 4, 5];

console.log("Array length: " + arr.length); // printing the array length 

arr.push(6);

console.log("Printing array : " + arr);

arr.splice(1, 0, 8); // Remove 0 element at index 1 and add 8 
console.log("Printing array : " + arr);

arr.splice(1, 1, 9); // Remove 1 element at index 1 and add 9 
console.log("Printing array : " + arr);

arr.splice(1, 1);
console.log("Printing array : " + arr);

let newArr = arr.slice(1, 3);
console.log("Printing array after slice: " + newArr); // Printing array after slice: 2,3



arr.reverse();
console.log("Printing array in reverse : " + arr); // Printing array in reverse : 6,5,4,3,2,1

arr.reverse();
let doubleArr = arr.map((n => n * 2));
console.log("Printing doubleArr in reverse : " + doubleArr); //Printing doubleArr in reverse : 2,4,6,8,10,12

let index = arr.indexOf(2);
console.log("Index of 2 in the array is : " + index); //Index of 2 in the array is : 1

arr.forEach((n => console.log(n)));

let evenNumbers = arr.filter((n) => n % 2 === 0);
console.log("Printing even numbers from the array : " + evenNumbers);

function adding(...numbers) {
    // 'numbers' is an array containing all the arguments
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
const t = adding(1, 2, 3, 4); 
console.log("Printing total : " + t); // Printing total : 10

let numbers1 = [1,2,3];
let numbers2 = [...numbers1, 4,5];
console.log("After expanding: " + numbers2); //After expanding: 1,2,3,4,5

let copyArray = [...numbers2];
console.log("After copying: " + copyArray); //After copying: 1,2,3,4,5

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergeArray = [...arr1, ...arr2];
console.log("After merging: " + mergeArray); //After merging: 1,2,3,4,5,6