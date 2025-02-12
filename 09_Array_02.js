const marvel_heros = [ "thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// to combine two arr 01 
// marvel_heros.push(dc_heros);            // push works on existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//  to combine two arr  02
const allHeros = marvel_heros.concat(dc_heros); // concat returns a new array
// console.log(allHeros);


// to combine two or more arr using spread operator 03 (most used method)==========>>>
//===========================spread operator=================
const Spread_all_heros = [...marvel_heros, ...dc_heros];
console.log(Spread_all_heros);

// ===========================  flat(Infinity) method  ====================
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("pawan"));
console.log(Array.from("pawan"));  //convert pawan in array of char
console.log(Array.from({name: "pawan"})); // ==>> interesting case ,  required info on which base array can be created , whether key or values.


//  ==================== Array.of method ================

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // returns a array of score