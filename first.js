const userName = prompt('What is your name?');
const userInput = Number(userName);
if (isNaN(userInput)) {
    alert(`Hello ${userName} ! How are you?`)
}
else {
    alert('Name is not entered')
}

