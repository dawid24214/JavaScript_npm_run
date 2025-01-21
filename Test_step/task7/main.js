// Task1: Combining strings using variables
// Define two variables:
//
//     firstName – should contain a first name (e.g., "Dawid").
//     lastName – should contain a last name (e.g., "Grochowski").
//     Create a new variable fullName that concatenates these two strings into one string, separating them with a space. Use a template string.
//
//     Print the result to the browser console using console.log.


// const firstName = 'Dawid';
// const lastName = ' Grochowski';
//
// console.log(firstName + lastName);


// template string

const firstName = 'Dawid';
const lastName = 'Grochowski';
const fullName = `${firstName} ${lastName}`
console.log(fullName);



//
// Task: Displaying the result of an operation
// Define two variables:
//
//     num1 – assign it any numeric value, for example 8.
// num2 – assign it a different numeric value, for example 3.
// Create a new variable result that will store the product of these two numbers.
//
//     Print a message in the browser console in the form of a sentence:
//
//     For example, for the given numbers:
//
//     csharp
//
// The result of multiplying 8 and 3 is: 24
// Use a template string to do this.

const num1 = 8;
const num2 = 3;
const result = num1 * num2;
const fullResult = `The result of multiplying  ${num1} and ${num2} is: ${result}`
console.log(fullResult)



// Task: Operations on numbers
// Define three variables:
//
//     a – assign it a numeric value, for example 12.
// b – assign it a numeric value, for example 4.
// c – assign it a numeric value, for example 6.
// Perform the following mathematical operations:
//
//     Add a and b, and assign the result to the variable sum.
//     Divide a by c, and assign the result to the variable division.
//     Print the results of both operations in the browser console in the following form:
//
//     The sum of a and b is: ...
// The result of dividing a by c is: ...
// Use template strings to print the results.

const a = 12;
const b = 4;
const c = 6;

const sum = a + b ;
const division = a / c ;

const fullSum = `The sum of and b  is.. ${sum}`;
const fullDivision = `The result of dividing a by c is ${division}`;
console.log(fullSum);
console.log(fullDivision);



