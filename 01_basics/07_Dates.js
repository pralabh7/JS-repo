//Dates

let date=new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())

let myDate=new Date(2005,0,10,10,41)
let mydate2=new Date("2005-05-04")
console.log(mydate2.toLocaleString())
console.log(mydate2.getDate())

let timeStamp=Date.now()
console.log(timeStamp)
console.log(Math.floor(timeStamp/1000)) //in Seconds

let newdate=new Date()
console.log(newdate.getFullYear())
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)

// `${newdate.getDay()} and the time `

newdate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newdate.toDateString())