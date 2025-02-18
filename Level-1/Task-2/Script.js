const colors = ['blue','green','red','purple','orange','pink','yellow'];
let colorIndex = 0;

function changeColor(){
    const button = document.querySelector('.color-button');
    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

function displayGreeting(){
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12){
        greeting = "Good Moring!";
    } else if (hours < 18){
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening";
    }

    document.getElementById('greetingMessage').innerText = greeting;
    document.getElementById('greetingModal').style.display = 'flex';
}

function closeModal(){
    document.getElementById('greetingModal').style.display = 'none';
}


let display = document.getElementById('display');
let currentValue = '';
let operation = '';
let previousValue = '';

function appendToDisplay(value) {
    currentValue += value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    operation = '';
    previousValue = '';
    display.value = '';
}

function setOperation(op) {
    if (currentValue !== '') {
        if (previousValue !== '') {
            calculate();
        }
        operation = op;
        previousValue = currentValue;
        currentValue = '';
    }
}

function calculate() {
    if (previousValue !== '' && currentValue !== '') {
        let result;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            case '^':
                result = Math.pow(prev, current);
                break;
        }
        display.value = result;
        previousValue = result.toString();
        currentValue = '';
        operation = '';
    }
}

