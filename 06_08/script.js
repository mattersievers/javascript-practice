/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = "3.2";

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

//Adding a string to 
let result1 = a + b + c;

console.log("Result 1: ", result1, ` type of ${typeof result1}`);


let result2 = a + b + parseFloat(c);

console.log("Result 2: ", result2, ` type of ${typeof result2}`);



//exponents a = 5 to the power of b = 4
let result3 = a ** b;

console.log("Result 3: ", result3, ` type of ${typeof result3}`);


//modulo arithmetic 5 divides 4 (remainder of 1)
let result4 = a % b

console.log("Result 4: ", result4, ` type of ${typeof result4}`);