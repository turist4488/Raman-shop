/*
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
* The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
*
* */

function sum(n) {
  return (n * (n-1)) / 2;
}

const number = 10;

const multipleOf3 = 3 * sum(Math.floor((number - 1) / 3));
const multipleOf3 = 5 * sum(Math.floor((number - 1) / 5));

