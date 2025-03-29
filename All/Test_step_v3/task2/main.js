let number = parseInt(prompt('Enter a number'));

if (isNaN(number)) {
    console.log('Error: Please enter a valid number ');
}else {
    if (number % 2 === 0){
        console.log('The number is even');
    }else {
        console.log('The number is odd.');
    }

    if (number % 5 === 0){
        console.log('The number is divisible by 5.');
    }
}