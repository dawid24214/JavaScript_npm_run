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


function printArrayValues(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

const userArray = ['Jan', 'Ania', 'Zbyszek' , 'Kasia'];
const skills = ['JavaScript' , 'Python' , 'NodeJS' , 'Java'];

console.log('users:');
printArrayValues(userArray);

console.log(skills);
printArrayValues(skills);