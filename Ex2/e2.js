//ejercicio 2-map()---------------------------------------
/*
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
*/
const arrNumbers = [20, 25, 30, 35, 40];

function doubledNumbers( arrNumbers ) {
    return arrNumbers.map( (x) => x * 2 );
}

let result = doubledNumbers (arrNumbers);
console.log(`The result of doubling the numbers is: ${result}.`);