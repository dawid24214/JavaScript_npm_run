// let grade = 1;
//
// switch (grade){
//     case 1:
//         console.log('F');
//         break;
//     case 2:
//         console.log('E');
//         break;
//     case 3:
//         console.log('D');
//         break;
//     case 4:
//         console.log('C');
//         break;
//     case 5:
//         console.log('B');
//         break;
//     case 6:
//         console.log('A');
//         break
//     default:
//         console.log('non number');



//
//
// for (;;){
//     console.log('To jest petla nieskonczona');
// }


// const programmingLanguages = ['JavaScript', 'TypeScript', 'Go' ];
//
//
// for (let counter = 0; counter < programmingLanguages.length; counter++) {
//     console.log(programmingLanguages[counter]);
// }


// const numbers = [];
//
// for (let counter = 1; counter >= 9; counter += 2) {
//     numbers.push(counter);
// }
// console.log(numbers);

// const programmingLanguages = ['JavaScript', 'TypeScript', 'Go'];
//
// for (const programmingLanguage of programmingLanguages) {
//     console.log(programmingLanguage);
// }
//

// const programmingLanguages = ['JavaScript' , 'TypeScript', 'Go'];
//
// for (let counter = 0; counter < programmingLanguages.length; counter++){
//     console.log(programmingLanguages[counter]);
// }

// let i = 0;
// while (i !== 5){
//     console.log('Nie jestem piątką');
//     i = Math.floor(Math.random() * 10);
//
// }

// floor - zaokrąglenie w dół
// ceil - zaokrąglenie do góry
// round - zaokrągla do najbliższej liczby
// random to losowa liczba z przedziału 0-1.
// pow(value, power) - potęgowanie

// let i;
// do{
//     console.log('Nie jestem piątką');
//     i = Math.floor(Math.random() * 10);
// }while (i !== 5);


// for (let row = 0; row < 10; row++){
//     for (let col = row; col < 10; col++){
//         console.log(`Wiersz = ${row}`, `Kolumna=${col}`);
//     }
// }


// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//     ];
// for (let i = 0; i < matrix.length; i++){
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`Element [${i}][${j}] to : ${matrix[i][j]}` );
//     }
// }
// //Pętla zagnieżdżona – iteracja po macierzy

// -----------------------------------------
//Pętla z wieloma zmiennymi sterującymi

// for (let i = 0 , j = 10; i < j; i++, j--) {
//     console.log(`i= ${i} , j: ${j}`);
// }


// //Pętla z wykorzystaniem instrukcji continue
// const text = 'javascript';
// for (let i = 0; i < text.length; i++){
//     if ('aeiou'.includes(text[i])){
//         continue;
//     }
//     console.log(text[i]);
// }

// // pętla z warunkiem przerwania – obliczanie silni z ograniczeniem
// let factorial = 1;
// const limit = 1000;
// for (let i = 1; i <= 10; i++){
//     factorial *= i;
//     console.log(`Silnia ${i} wynosi: ${factorial}`);
//
//     if (factorial > limit){
//         console.log(`Przekroczono limit (${limit}) przy i = ${i}`);
//         break;
//     }
// }

// for (let i = 1; i <= 10; i++){
//     console.log('Liczba: ' + i);
// }
// // wynik wykaz pola liczba od 1 do 10
//

// const imiona = ['Dawid', 'Aron' , 'Kasia' , 'Ola'];
//
// for (let i = 0; i < imiona.length; i++) {
//     console.log('czesc,' + imiona[i] + '!');
// }
//
// const liczba = [5, 10, 15, 20, 25];
// for (let i = 0; i < liczba.length; i++){
//     console.log('Element' + i + ': ' + liczba[i]);
// }
//

//
// const liczby = [2, 4, 6, 8, 10];
// let suma = 0;
//
// for (let  i = 0; i <liczby.length; i++){
//     suma += liczby[i];
// }
//
// console.log('Suma liczby w tablicy' + suma);

// let liczby = [1, 2, 3, 4, 5];
// for (let i = 0; i <liczby.length; i++) {
//     liczby[i] *=2;
// }
// console.log(liczby);
//
//
// const liczby [10, 20, 30, 40];
// for (const liczba of liczby){
//     console.log(liczba);
// }

// const tekst = 'Hello';
// for (const litera of  tekst){
//     console.log(litera);
// }

// for in

// const owoce = ['Jabłko', 'Bannan', 'Gruszka'];
//
// for (const index in owoce){
//     console.log(`Indeks: ${index}, Wartość: ${owoce[index]}`);
// }
//
//
// Wynik
// Indeks: 0, Wartość: Jabłko
// Indeks: 1, Wartość: Banan
// Indeks: 2, Wartość: Gruszka





// // for in
//
// const osoba ={
//     imie: 'Dawid',
//     wiek: 25,
//     zawod:'Programista'
// };
// for (const klucz in osoba){
//     console.log(`${klucz}: ${osoba[klucz]}`);
// }
// wynik
// --------------------
//     imie: Dawid
// wiek: 25
// // zawod: Programista
// let i = 1;
//
// while (i <= 80) {
//     console.log('Jestem Robotem: ', i);
//     i++;
// }

// let liczba = 0;
// while (liczba !== 6){
//     liczba = Math.floor(Math.random() * 10) + 1;
//     console.log('Wylosowana Liczba to :', liczba);
// }

// let i = 1;
// do {
//     console.log('Liczba', i);
//     i++
// }while (i <= 5);
// let x = 10;
//
// do {
//     console.log("To sie wykona tylko raz , nawet jezeli warunek jest falszywy !");
//
// }while (x < 5);

// for (let i = 1; i <= 3;  i++) {
//    for (let j = 1; i <= 3; j++)
//        console.log(`Pierwsza petla: ${i}`, `Druga petla: ${j}`);
// }
//
// for (let i = 1; i <= 5; i++){
//     let wiersz = '';
//     for (let j = 1; j <= 5; j++){
//         wiersz += (i * j) + '\t';
//     }
//     console.log(wiersz);
// }

// const macierz  = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
//
// for (let i = 0; i < macierz.length; i++){
//     for (let j = 0; j < macierz[i].length; j++){
//         console.log(`Element [${i}][${j}] = ${macierz[i][j]}`);
//     }
// }

// let n = 5;
// for (let i = 1; i < n; i++){
//     let wiersz = '';
//     for (let j = 1; j <= i; j++){
//         wiersz += '**';
//     }
//     console.log(wiersz);
// }

// let i = 1;
// while (i <= 3){
//     let j=  1;
//     while (j <=3){
//         console.log(`i = ${i} j = ${j}`);
//         j++;
//     }
//     j++;
// }