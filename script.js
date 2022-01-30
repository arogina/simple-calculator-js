const MAX_CHAR = 20;
const NUMBERS = document.querySelectorAll(".number");
const OPERATIONS = document.querySelectorAll(".operation");
const RESULT = document.querySelector(".result");

var result = 0;
var resultText = RESULT.value;
var clickedEqual = false; // it checks if last clicked button was Equal

NUMBERS.forEach(number => {
    number.addEventListener('click', () => {
        if (resultText.length <= MAX_CHAR) {
            if (resultText === "0" || clickedEqual) {
                resultText = number.innerText;
                result = number.innerText;
                clickedEqual = false;
            } else {
                result += number.innerText;
                resultText += number.innerText;
            }

            RESULT.value = resultText;
        }
    });
});

OPERATIONS.forEach(operation => {
    operation.addEventListener('click', () => {
        switch (operation.innerText) {
            case "AC":
                resultText = "0";
                result = 0;
                clickedEqual = false;
                break;
            case "=":
                resultText = math.evaluate(result);
                clickedEqual = true;
                console.log(result);
                break;
            case "×":
                operationsText(operation.innerText);
                break;
            case "÷":
                operationsText(operation.innerText);
                break;
            case "(":
                bracketsText(operation.innerText)
                break;
            case ")": 
                bracketsText(operation.innerText);
                break;
            default:
                operationsText(operation.innerText);
                break;
        }

        RESULT.value = resultText;
    });
});

function bracketsText (text) {
    if (resultText.length <= MAX_CHAR) {
        if (resultText === "0"){
            resultText = text;
            result = text;
        } else {
            resultText += text;
            result += text;
        }
    }
}

function operationsText (text) {
    if (resultText.length <= MAX_CHAR) {
        resultText += text;
        if (text === "×") result += "*";
        else if (text === "÷") result += "/";
        else result += text;
        clickedEqual = false;
    }
}