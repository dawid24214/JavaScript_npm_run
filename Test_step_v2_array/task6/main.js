const people = [
    {name: 'Ania', age: 17},
    {name: 'Bartek', age: 22},
    {name: 'Kasia', age: 19},
    {name: 'Tomek', age: 15},
];
const filterAge = people.filter(person => person.age >= 18);
console.log(filterAge);
