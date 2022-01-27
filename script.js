const MAX_CHAR = 20;
const NUMBERS = document.querySelectorAll(".number");
const OPERATIONS = document.querySelectorAll(".operation");
const RESULT = document.querySelector(".result");

var result = 0;
var resultText = RESULT.value;
var clickedEqual = false; // it checks if last clicked button was Equal

NUMBERS.forEach(number => {
    number.addEventListener('click', () => {
        if (resultText === "0" || clickedEqual) {
            resultText = number.innerText;
            result = number.innerText;
            clickedEqual = false;
        } else {
            result += number.innerText;
            resultText += number.innerText;
        }

        RESULT.value = resultText;
    });
});

OPERATIONS.forEach(operation => {
    operation.addEventListener('click', () => {
        switch (operation.innerText) {
            case "AC":
                resultText = "0";
                clickedEqual = false;
                break;
            case "=":
                resultText = math.evaluate(result);
                clickedEqual = true;
                console.log(result);
                break;
            case "×":
                resultText += operation.innerText;
                result += "*";
                clickedEqual = false;
                break;
            case "÷":
                resultText += operation.innerText;
                result += "/";
                clickedEqual = false;
                break;
            case "(":
                if (resultText === "0"){
                    resultText = operation.innerText;
                    result = operation.innerText;
                } else {
                    resultText += operation.innerText;
                    result += operation.innerText;
                }
                break;
            case ")": 
                if (resultText === "0"){
                    resultText = operation.innerText;
                    result = operation.innerText;
                } else {
                    resultText += operation.innerText;
                    result += operation.innerText;
                }
                break;
            default:
                resultText += operation.innerText;
                result += operation.innerText;
                clickedEqual = false;
                break;
        }

        RESULT.value = resultText;
    });
});