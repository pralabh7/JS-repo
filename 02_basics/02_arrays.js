const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //pushes anything inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] //spread function(More convinient as we can add more than 2 arrays)

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(2) //can use infinity when gets confused with levels
console.log(real_another_array);



//console.log(Array.isArray("Hitesh")) //returns true or false
//console.log(Array.from("Hitesh")) //from-Converts anything into array
//console.log(Array.from({name: "hitesh"})) // interesting-returns empty array as it don't know whether to make array of key or value

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));

//console.log(Array.from("Pralabh"))
//Array.from-Creates a new Array instance from an iterable or array-like object.
//console.log(Array.of("PRALABH",4,5,true));
//Array.of-Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
