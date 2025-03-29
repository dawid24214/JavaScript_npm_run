// Zadanie 4: Rozbijanie i łączenie napisów
// Stwórz zmienną sentence o wartości "JavaScript jest super".
//     Za pomocą metody split rozbij łańcuch znaków na tablicę słów (np. ["JavaScript", "jest", "super"]).
//     Za pomocą metody join połącz tablicę z powrotem w jeden tekst, ale tym razem oddziel elementy myślnikiem (np. "JavaScript-jest-super").
// Wypisz wynik w konsoli.

const sentence = 'JavaScript jest super';
const sentenceWords = sentence.split(" ");


console.log(sentenceWords.join('-'));