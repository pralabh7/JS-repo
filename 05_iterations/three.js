//for of

//["","",""]
//[{},{},{}]

const numbers=[2,4,6,8,10]
for(const num of numbers){
    //console.log(num)
}

const greetings="Hello World"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
}

//Maps

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"INDIA")

for(const [key,value] of map){ //if we normally write key then it'll print key value pairs in arrays
    console.log(`${key} stands for ${value}`)
}

const obj={
    name:"pralabh",
    age:20
}

//for(const prop of obj){
//    console.log(prop)
//}
// for(const [key,value] of obj){
//     console.log(`${key} has ${value}`)
// }

//object is not iterable by either of above ways