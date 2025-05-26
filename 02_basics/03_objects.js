// singleton-is a design pattern that ensures a object or class has only one instance
// Object.create
//when object is created using constructor then singleton is generated 
//when object is created using literal then singleton isn't made

// object literals

const mySym = Symbol()

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]:"Hello",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//access of object
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
console.log(JsUser["age"])
console.log(JsUser[mySym])


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());