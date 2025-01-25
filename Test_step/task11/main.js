// // zadanie1
// const cities = ["Warsaw",'Berlin','Paris','London','New York' ];
//
// if (cities.includes('Paris')){
//     console.log('Paris is in the list');
// }else {
//     console.log('Paris is not in the list');
// }
//
// if (cities.includes('Tokyo')){
//     console.log('Tokyo is in the list');
// }else {
//     console.log('Tokyo is not in the list');
// }
// // Zadanie 2
// const students = ['Anna', 'John','Kate','Mark','Sophie'];
// students.shift();
// students.pop();
//
// students.unshift('Dawid');
// students.push("Emma");
// console.log(students);
//
// // Zadanie 3
// const numbers = [10, 20, 30, 40, 50];
// numbers.reverse();
// console.log(numbers);
//
// // Zadanie 4
// const ages = [12,18,24,10,30,16,28];
// const adults = ages.filter(age => age >= 18);
//
// console.log(adults)
//
// // Zadanie 5
// const prices = [100, 200, 300, 400, 500];
//
// const pricesWithVat = prices.map(price => price * 1.2);
// console.log(pricesWithVat);

// Zadanie 6
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);
