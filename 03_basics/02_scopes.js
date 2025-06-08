//scope in console of browser is different from scope in node js
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c=30 //Unlike let and const, It's scope in not block scope out of this
               //if statement c got updated by this statement that's why we don't use var
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ //in this function declaration we can call function before
    return num + 1
}



//addTwo(6)
const addTwo = function(num){ //in this type of declaration we can't
    return num + 2
}

