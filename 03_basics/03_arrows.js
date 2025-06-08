const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
//this-gives info about current context
// user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this); //different in console there it gives window object,etc

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 ) //if using these brackets {}, then write return

//const addTwo = (num1, num2) => ({username: "hitesh"}) //returning object

//console.log(addTwo(3, 4))


//const myArray = [2, 5, 3, 7, 8]
//myArray.forEach()

//my practice-aise hi
function M1(){
    console.log("Hello 1")
}
const M2=function(){
    console.log("Hello 2")
}
const M3=() =>{
    console.log("Hello 3")
}
// M1()
// M2()
// M3()
