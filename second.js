let num1 = prompt("Enter first number:");
if (num1 === '') {
    alert('Please reload the page and enter the number');
}
else {
    let firstNumber = Number(num1);
    if (isNaN(firstNumber)) {
        alert('It is NaN. Please reload the page and try again');
    }
    else {
        alert('First number is accepted')
        let num2 = prompt("Enter second number:");
        if (num2 === '') {
            alert('Please reload the page and enter the number');
        } else {
            let secondNumber = Number(num2);
            if (isNaN(firstNumber)) {
                alert('It is NaN. Please reload the page and try again');
            } else {
                alert('Second number is accepted')
                let action = prompt('Enter any action:');
                if (action === '') {
                    alert('Please reload the page and enter the action');
                }
                else if (action === '+') {
                     answer = firstNumber + secondNumber;
                     alert(`The result is : ${answer}`);
                }
                else if (action === '-') {
                    answer = firstNumber - secondNumber;
                    alert(`The result is : ${answer}`);
                }
                else if (action === '/') {
                    if (firstNumber === 0 || secondNumber === 0) {
                        alert('Сan not be divided by 0');
                    }
                    else {
                        answer = firstNumber / secondNumber;
                        alert(`The result is : ${answer}`);
                    }
                }
                else if (action === '*') {
                    answer = firstNumber * secondNumber;
                    alert(`The result is : ${answer}`);
                }
                else {
                    alert('Error. Please reload the page and try again')
                }
            }
        }
    }
}