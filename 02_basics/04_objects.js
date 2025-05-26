//const tinderUser=new object() //singleton way of object creation
const tinderUser={} //No singleton

tinderUser.name="Pralabh"
tinderUser.email="pralabhmishra243@gmail.com"
tinderUser.age=20
tinderUser["gender"]="Male"
tinderUser["adult"]=true
//console.log(tinderUser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const combine={obj1,obj2,obj3} //combine is a object having 3 objects
//console.log(combine)
const combine2=Object.assign({},obj1,obj2,obj3)
//console.log(combine2)

const combine3={...obj1,...obj2,...obj3}
//console.log(combine3)

//data from database comes like this-array of objects
const users=[
    {
        id:1,
        mail:"1mail"
    },
    {
        id:2,
        mail:"2mail"
    },
    {
        id:3,
        mail:"3mail"
    }
]
// console.log(users[1].mail)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("name"))
// console.log(tinderUser.hasOwnProperty("location"))

const course={
    name:"js-course",
    platform:"Youtube",
    price:"free"
}

const {price}=course
//console.log(price)
const {platform:source}=course
//console.log(source)

//JSON-js object notation for APIs

{
    "name":"Pralabh",
    "age":20,
    "adult":true
    "email":"xyzmail.com"
}
//OR
[
    {},
    {},
    {}
]