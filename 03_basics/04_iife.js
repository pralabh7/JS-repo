// Immediately Invoked Function Expressions (IIFE)
//we use iife so that global scope doesn't pollute our function or it's variables


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //for two iife's ; is very important as it doesn't know when to end this above iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')