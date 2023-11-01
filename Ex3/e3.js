//ejercicio 3 reduce()----------------------------------------
//Write a program to compute the sum and product (multiplication) of an array of numbers.
//Print out the sum and the product.

const arrNum = [20, 25, 30, 35, 40];

function sumNum(num1, num2) {
  return num1 + num2;
}
let sum = arrNum.reduce(sumNum);


function productNum(num1, num2) {
  return num1 * num2;
}
let product = arrNum.reduce(productNum);

console.log( ` The sum of ${arrNum} is ${sum} and the product is ${product} `);