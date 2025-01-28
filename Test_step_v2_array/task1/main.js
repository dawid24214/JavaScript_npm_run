// Zadanie 1: Usuwanie i wstawianie w środku
// Stwórz tablicę animals zawierającą następujące elementy:
//     - "dog", "cat", "elephant", "lion", "tiger".
//         Za pomocą metody splice usuń element "elephant" i wstaw w to miejsce "giraffe".
//     Wypisz zmodyfikowaną tablicę w konsoli.


const animals = ["dog","cat",'elephant','lion','tiger'];
animals.splice(2,1,'giraffe');
console.log(animals);