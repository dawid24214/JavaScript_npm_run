// zadanie1
const cities = ["Warsaw",'Berlin','Paris','London','New York' ];

if (cities.includes('Paris')){
    console.log('Paris is in the list');
}else {
    console.log('Paris is not in the list');
}

if (cities.includes('Tokyo')){
    console.log('Tokyo is in the list');
}else {
    console.log('Tokyo is not in the list');
}
// Zadanie 2
const students = ['Anna', 'John','Kate','Mark','Sophie'];
const removeStudents = students.splice(1,3);
console.log(students);
console.log(removeStudents);
