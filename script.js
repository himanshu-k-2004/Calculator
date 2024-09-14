let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let previousValue = '';
let currentValue = '';

function appendNumber(number) {
    if (currentInput === '' && number === '.') return; // Prevent leading decimal point
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '' && previousValue === '') return; // No operation if nothing to calculate

    if (currentOperation !== '') calculate(); // Calculate if there's an existing operation

    previousValue = currentInput;
    currentOperation = operation;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (currentInput === '' || previousValue === '') return;

    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result;
    currentOperation = '';
    previousValue = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    previousValue = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || previousValue || '0';
}

