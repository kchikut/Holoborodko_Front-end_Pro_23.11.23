let userInput = prompt('Please enter a five-digit number:');
if (userInput === '') {
    alert('Please reload the page and enter the number');
}
else {
    let userInputNumber = Number(userInput);
    if (isNaN(userInputNumber)) {
        alert('It is NaN. Please reload the page and try again');
    }
    else {
        let e = userInputNumber%10;
        let q = (userInputNumber - e) / 10;
        let d = q%10;
        let w = (q - d)/10;
        let c = w% 10;
        let r = (w - c) / 10;
        let b = r% 10;
        let a = (r - b) / 10;
        alert (`Result: ${a} ${b} ${c} ${d} ${e}`);
    }
}