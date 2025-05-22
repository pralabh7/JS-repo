// primitive- Call by value-We don't get the original thing or reference, 
// we get copied material and changes are applied on copied material itself.

//JS is a dynamically typed language

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

let heroes=["Ironman","Thor","Vision","Superman"];
console.log(heroes);

let obj={
    name:"Pralabh",
    age:20,
    single:true
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
//return type of non primitive datatypes are objects or object function(for functions)
console.log(typeof obj)

// https://262.ecma-international.org/5.1/#sec-11.4.3