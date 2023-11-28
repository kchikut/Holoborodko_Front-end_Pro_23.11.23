const userInput = prompt('Please enter a five-digit number:');
if (userInput === '') {
    alert('Please reload the page and enter the number');
}
else {
   let userInputNumber = Number(userInput);
    if (isNaN(userInputNumber)) {
        alert('It is NaN. Please reload the page and try again');
    }
    else if (userInputNumber < 10000 || userInputNumber > 100000) {
            alert('Error. Choose a number between 1000 and 99999');
        }

    else {
        if (Number.isInteger(userInputNumber)) {
        const fifthDigit = userInputNumber % 10;
        userInputNumber = (userInputNumber - fifthDigit) / 10;
        const fourthDigit = userInputNumber % 10;
        userInputNumber = (userInputNumber - fourthDigit) / 10;
        const thirdDigit = userInputNumber % 10;
        userInputNumber = (userInputNumber - thirdDigit) / 10;
        const secondDigit = userInputNumber % 10;
        const firstDigit = (userInputNumber - secondDigit) / 10;
        alert(`Result: ${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit} ${fifthDigit}`);
        }
        else {
            alert('Error.You must enter an integer');
        }
    }
}