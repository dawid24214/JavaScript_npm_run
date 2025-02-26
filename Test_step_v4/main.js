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

// function maxFromArray (numbers) {
//     let max = numbers[0];
//     for (let i = 1; i < numbers.length; i++){
//         if (numbers[i] > max){
//             max = numbers[i];
//         }
//     }
//     return max
// }
// const randomNumbers = [12, 45, 78, 34, 99, 23, 56];
// const result = maxFromArray(randomNumbers);
// console.log('Najwieksza wartosc : ', result);


// function indexOfRepeteatedValue (array){
//     let firstIndex = -1;
//     const seenNumbers = new Set();
//
//     for (let i = 0; i < array.length; i++){
//         if (seenNumbers.has(array[i])){
//             firstIndex = array.indexOf(array[i]);
//             break;
//         }
//         seenNumbers.add(array[i]);
//     }
//     console.log('Pierwsza powtarzająca sie liczba ma indeks:', firstIndex);
//     return firstIndex;
//
//
// }
// const numbers = [ 2, 4, 5, 2, 3, 5, 1, 2, 4];
// const result = indexOfRepeteatedValue(numbers);
// console.log('Wynik', result);

// const number = 1299.99;
// const  text = number.toString();// otrzymamy '1299.99' czyli zmienna zawirajaca tekst


//Metody tekstowe

//1.charArt
//
// const text = 'bigos';
// const char = text.charAt(2);
// console.log(char)

//2 . concat

// const text = 'bigos';
// const text2 = 'z charakterem';
// const  text3 = text.concat(text2);
// console.log(text3);

// 3.indexOf

// const text = 'Zupa byla za slona';
// const index = text.indexOf('');
// console.log(index);
// const text = 'Zupa byla za slona, ale byla za free';
// const index = text.lastIndexOf('byla');
// console.log(index)


// 4.replace

// const dinner = 'Kanpa z serem';
// const newText = dinner.replace('serem', 'szynką');
// console.log(newText);

// // 5.slice
// const text = 'Myśl pozytywie';
// const newText = text.slice(0, 6);
// console.log(newText);




//addnotacja , skonczylem na substr


// function isEven (number) {
//     return number % 2 ==== 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));

//
// function generationFibonaci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     if (n === 2) return [ 0, 1];
//
//     let sequence = [0, 1];
//     for (let i =  2; i < n; i++){
//         sequence.push(sequence[i - 1] + sequence [i - 2]);
//     }
//     return sequence;
// }
//
// console.log(generationFibonaci(5));
// console.log(generationFibonaci(10));

//zobrazowany zapis petli for

// let i = 0;
// while (i !== 5){
//     console.log('Nie jestem piatka');
//     i = Math.floor(Math.random()*10);
// }
// for ( let row = 0; row < 2; row++){
//     for (let col =0; col < 2; col++){
//         console.log(`Tutaj${row} ,smok${col}`);
//     }
// }
const multiArray = [];

for (let row = 0; row < 3; row++){
    multiArray[row] = [];
    // console.log(` moje row ${row}`)
    for (let col = 0; col < 3; col++){
        console.log(` moje mnozenie ${row} * ${col}`);
        multiArray[row][col]= row * col;
    }
}
console.log(multiArray)