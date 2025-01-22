// zadanie1
const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    'Black'
];
console.log(colors[1]);
console.log(colors[colors.length - 1]);
// zadanie2

const tasks =['Learn JavaScript',"Pratice CSS","Build a project"];
tasks.push('Deploy the project');
const removed =tasks.shift();
console.log(tasks);
console.log(removed);


// zdanie3
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Element ${i + 1}: ${numbers[i]}`);
}
