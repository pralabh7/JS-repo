function sayMyName(){
    console.log("Pralabh")
}
//sayMyName // Reference of function
//sayMyName() //()-Execution of function

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
//addTwoNumbers(3,8)
//addTwoNumbers(3,"s")
//let result=addTwoNumbers(3,5)
//console.log(result)

function addTwoNumbers2(num1,num2){
    let res=num1+num2
    return res
    console.log("Pralabh") //unreachable code-written after return statement
}
let result=addTwoNumbers2(24,67)
//console.log("result is :",result)

function loginUserMessage(username="sam"){ //We can give default value like username="sam" then if part gets neglected always
    if(!username){ //undefined is taken false OR username===undefined
        console.log("Please enter a valid name")
        return
    }
    return `${username} your login is successful`
}
loginUserMessage()
//console.log(loginUserMessage("Pralabh"))
//console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num){
    return num
}
//console.log(calculateCartPrice(10,20,100,200))

const user={
    username:"Pralabh",
    age:20
}
function giveInfo(obj){
    console.log(`Hello ${obj.username}, You are ${obj.age} years old..`)
}
//giveInfo(user)
giveInfo({
    username:"Mishra ji",
    age:20
})

const arr=[10,20,30,40]
function getSecondElement(array){
    return array[1];
}
//console.log(getSecondElement(arr))
//console.log(getSecondElement([100,200,300,400]))