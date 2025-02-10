// const userArray = ['Jan','Ania' , 'Zbyszek', 'Kasia'];
//
// const skills = ['JavaScript', 'Python' , 'NodeJS', "Java"];
//
// console.log('users:');
//
// for (let  i = 0; i < userArray.length ; i++) {
//
//     console.log(userArray[i])
//
// }
//
// console.log('skills:');
// for (let i = 0 ; i < skills.length; i++) {
//     console.log(skills[i]);
// }

//
// function printArrayValues(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
//
// const userArray = ['Jan', 'Ania', 'Zbyszek' , 'Kasia'];
// const skills = ['JavaScript' , 'Python' , 'NodeJS' , 'Java'];
//
// console.log('users:');
// printArrayValues(userArray);
//
// console.log(skills);
// printArrayValues(skills);



//Function / Method
// Functions are one of the basic "building blocks" in JavaScript.
// A function is a set of expressions/statements that perform some task or calculate a value.
// To use a function, you must first
//define it somewhere in the scope from which it will be called.



// function printArrayValues (array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
//
// const userArray = [ 'Jan', 'Ania', 'Zbyszek', 'Kasia'];
//
// printArrayValues(userArray);
//
// unction sayHello()  {
//     console.log('Hello');
// }
// sayHello();f

// const foo = function getName(){
//     console.log('Ala');
// };
// foo();

// const bar = function () {
//     console.log('Ala');
// };
// bar();

// function getName(name) {
//     console.log(name +  ' Yeah');
// }
// getName('Ala');
// getName('Jan');
// getName('Marek');
// getName('Karol');
// getName(23);
//
// function showInfo (name, age, sex){
//     console.log(name);
//     console.log(age);
//     console.log(sex);
// }
// showInfo('Ala' , '99', 'female');

// function getName (name) {
//     console.log(name + 'Yeahh');
// }
// getName('Ala');
//
// let name = 'Ala';
//
// function  addElement(array, value){
//     array.push(value);
// }
// const numbers = [1, 2];
// addElement(numbers, 3);
// console.log(numbers);

// function getName(name) {
//     return name + ' & Leo';
// }
// // getName('Kate');
// let name = getName('Kate');
// console.log(name);

// function getName (name) {
//     return name;
//     let something = 'John'; //Nigdy sie nie wykona
//
// }
// console.log(getName('Kate'));


// function existInArray (array, elementToCheck) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === elementToCheck) {
//             return true;
//         }
//     }
//     return false;
// }
//
// const users = ['Jan', 'Zosia' , 'Kasia'];
// console.log(existInArray(users, 'Zosia' ));
//

// function createArray(rows) {
//     return Array.from({length: rows}, (_, i) => i + 1);
//
// }
// console.log(createArray(5));

// function printArray(array){
//     for (let i = 0; i < array.length; i++ ){
//         console.log(array);
//     }
// }
// const people = ['Alicja', 'Bartek' , 'Cezary', 'Dorota', 'Ewa'];
//
// printArray(people);

// function print2DArray(array) {
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array[i].length; j++){
//             console.log(array[i][j]);
//         }
//     }
// }
//
// const users = [
//     ['Alicja', 'Bartek'],
//     ['Cezary' , 'Dorota'],
//     ['Ewa' , 'Filip']
// ];
// print2DArray(users);