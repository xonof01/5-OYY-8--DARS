let display = document.getElementById('display');
let currentOperation = '';
let operation = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    if (operation === '') {
        operand1 += number;
        display.value = operand1;
    } else {
        operand2 += number;
        display.value = operand2;
    }
}

function setOperation(op) {
    if (operand1 !== '') {
        operation = op;
    }
}

function calculate() {
    if (operand1 !== '' && operand2 !== '' && operation !== '') {
        let result;
        switch (operation) {
            case '+':
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                result = parseFloat(operand1) / parseFloat(operand2);
                break;
            default:
                return;
        }
        display.value = result;
        operand1 = result;
        operand2 = '';
        operation = '';
    }
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operand2 = '';
    operation = '';
}
