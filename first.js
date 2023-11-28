const userName = prompt('What is your name?');
if (userName === '') {
    alert('Name is not entered');
}
else {
    let userInput = Number(userName);
    if (isNaN(userInput)) {
        alert(`Hello ${userName} ! How are you?`)
    }
    else {
        alert('Name is not entered')
    }
}
