let currentOperator = '';
let previousValue ='';
let currentValue = '';

let numbers = document.querySelectorAll('.data-number');
let operation = document.querySelectorAll('.data-operator');
let decimalPoint = document.getElementById('decimalpoint');
let answerBtn = document.getElementById('answer');
let clearBtn = document.getElementById('clear');
let eraseBTn = document.getElementById('erase');
let equationScreen = document.getElementById('showequation');
let currentInputScreen = document.getElementById('showsolution');


numbers.forEach((button)=>
button.addEventListener('click', function(e){
    insertNumberToScreen(e.target.textContent)
    currentInputScreen.textContent = currentValue;
}))

operation.forEach((button)=>
button.addEventListener('click', function(e){
    insertOperatorToScreen(e.target.textContent)
    equationScreen.textContent = `${previousValue} ${currentOperator}`;
    currentInputScreen.textContent = currentValue;
}))

eraseBTn.addEventListener('click', () => {
    eraseValue();
    currentInputScreen.textContent = currentValue;
    console.log(currentValue);
})

clearBtn.addEventListener('click', () => {
    currentOperator = '';
    previousValue = ''
    currentValue = '';
    currentInputScreen.textContent = currentValue;
    equationScreen.textContent = previousValue;
});

answerBtn.addEventListener('click', function() {
    getAnswer();
    equationScreen.textContent = `${previousValue} ${currentOperator} ${currentValue}`;
    currentInputScreen.textContent = solution;
});

function insertNumberToScreen(numberOnScreen) {
    if (currentValue.length <= 20){
    currentValue += numberOnScreen;
    }
}

function insertOperatorToScreen(operatorOnScreen) {
    if (currentOperator.length = 1){
    currentOperator = operatorOnScreen;
    }
    if (currentOperator !== null) getAnswer();
    previousValue = currentValue;
    currentValue = '';
}
function eraseValue(){
    currentValue = currentValue.slice(0,-1);
}

function getAnswer() {
    previousValue = Number(previousValue);
    currentValue= Number(currentValue);

    if (currentOperator === '+'){
        solution = previousValue + currentValue;
    } else if (currentOperator === '-'){
        solution = previousValue - currentValue;
    } else if (currentOperator === 'x'){
        solution = previousValue * currentValue;
    } else if (currentOperator === '÷'){
        solution = previousValue / currentValue;
    }
    solution = roundResults(solution); 
    solution = solution.toString();
}

 function roundResults(rawNumber) {
    return Math.round(rawNumber*1000)/1000;
}

