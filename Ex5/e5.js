//Exercise #5-----------------------------------------
/*
For each of the exercises below, assume you are starting with the following people array.
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function printOutList( arr ) { 
    return arr.join(", ");  
   }
  
let list = printOutList(people);
console.log( `All the people on my list is: ${list}`);

people.splice(1,1);
console.log( `List without Dani: ${people}`); 


people.splice( 2, 1 );
console.log( `List without Juan: ${people}`); 


people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
console.log(`Luis at the beginning: ${people}`);


people.push( "Arlene" );
console.log( `My name on the list: ${people}` );

for (let index = 0; index < people.length -1; index ++){
    if (people[index] === "Maria");       
    console.log(people[index]);
    {break;} 
}

console.log( "Maria is located as the: " + people.indexOf( "Maria" ) );