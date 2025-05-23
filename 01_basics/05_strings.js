let name1="Pralabh"
let name2=new String("Mishra")//hai string hi but type is object
const name ="Pralabh"
let age=20
let info=`My name is ${name} and i am ${age} years old.`
console.log(info)
console.log(name1)
console.log(name2)
consoel.log(typeof name1)
console.log(typeof name2)
//various functions can be applied on name1 and name2(both are strings)

console.log(name1[2])

console.log(name1.__proto__)

console.log(name2.length)

// console.log(gameName.toUpperCase());
let gameName="Battlefield"
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//IMPORTANT-Study about different methods of string in mdn