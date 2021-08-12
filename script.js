function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
     return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return NaN
    } else {
        return a / b;
    }
}

function subtract (a, b) {
    return a - b;
}

function percentage(a) {
    return a/100;
}

function operate(num1, num2, op) {
    if (op == "+") {
        function sum(num1, num2);
    } else if (op == "*") {
        function multiply(num1, num2);
    } else if (op == "/") {
        function divide(num1, num2);
    } else if (op == "-") {
        function subtract(num1, num2);
    } else if (op == "%") {
        function percentage(num2);
    }
}