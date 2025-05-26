let arr=[2,6,9,"Pralabh",true] //Date store multiple data types

//console.log(arr[2])
//JS array-copy-operations creates shallow copies(copies whose property share the same reference)
// rather than deep copies(copy of an object whose properties do not share the same reference)

let arr2=new Array(2,5,8,1,3)
//console.log(arr2[1])

//Array methods

arr2.push(10)
//console.log(arr2)
arr2.pop()
//console.log(arr2)

arr2.unshift(4)
arr2.shift()
//console.log(arr2)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", arr2);

const myn1 = arr2.slice(1, 3)

console.log(myn1);
console.log("B ", arr2);


const myn2 = arr2.splice(1, 3)
console.log("C ", arr2);
console.log(myn2)