class Calculator {
    constructor(previous, current) {
        this.previous = previous;
        this.current = current;
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        let prev = parseFloat(this.previousOperand)
        let currentValue = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(currentValue)) return
        switch (this.operation) {


            case '+':
                computation = prev + currentValue
                break

            case '-':
                computation = prev - currentValue
                break

            case '*':
                computation = prev * currentValue
                break

            case '/':
                computation = prev / currentValue
                break

            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
        
    }

    updateDisplay() {
        this.current.innerText = this.currentOperand;
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {  
            this.previous.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}` 
        } else {
            this.previous.innerText = ''
        }
    }

}

const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previous = document.querySelector('[data-previous]')
const current = document.querySelector('[data-current]')


const calculator = new Calculator(previous, current)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay()
})














// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//      return a * b;
// }

// function divide(a, b) {
//     if (b == 0) {
//         return NaN
//     } else {
//         return a / b;
//     }
// }

// function subtract (a, b) {
//     return a - b;
// }

// function percentage(a) {
//     return a/100;
// }

// function operate(num1, num2, op) {
//     if (op == "+") {
//         sum(num1, num2)
//     } else if (op == "*") {
//         multiply(num1, num2)
//     } else if (op == "/") {
//         divide(num1, num2)
//     } else if (op == "-") {
//         function subtract(num1, num2)
//     } else if (op == "%") {
//         percentage(num2)
//     }
// }