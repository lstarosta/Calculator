/*QuerySelectors and EventListeners*/
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const calculator = document.querySelector("#calculator");
calculator.addEventListener('click', interface);

/*===========================Functions===========================*/

/*Basic math functions*/
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => {/*if(b === 0) crash(); else*/ return a/b;}

/*This function will take an operator and values, then choose the correct operation to invoke*/
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if(operator === "+")
        return add(a,b);
    else if(operator === "-")
        return subtract(a,b);
    else if(operator === "*")
        return multiply(a,b);
    else if(operator === "/")
        return divide(a,b);
}

let operator = ""; //is assigned a math symbol
let clickedOperator = ""; //is assigned the event.target value

/*This function will read user's input and add it to display*/
function interface(event) {
    

    //remove the click effect
    if(clickedOperator !== "" && !(event.target.id === "buttonPlus" ||
    event.target.id === "buttonMinus" ||
    event.target.id === "buttonTimes" ||
    event.target.id === "buttonDivide")) {
        clickedOperator.classList.remove("clickedOperator");
        clickedOperator = "";
    }

    //prevents overflow
    if(input.textContent.length > 9 && event.target.id !== "buttonEquals"
        && event.target.id !== "buttonC") return;

    //if button was a digit or a Clear button
    if(event.target.id === "button1") {input.textContent += 1}
    else if(event.target.id === "button2") {input.textContent += 2}
    else if(event.target.id === "button3") {input.textContent += 3}
    else if(event.target.id === "button4") {input.textContent += 4}
    else if(event.target.id === "button5") {input.textContent += 5}
    else if(event.target.id === "button6") {input.textContent += 6}
    else if(event.target.id === "button7") {input.textContent += 7}
    else if(event.target.id === "button8") {input.textContent += 8}
    else if(event.target.id === "button9") {input.textContent += 9}
    else if(event.target.id === "button0") {input.textContent += 0}
    else if(event.target.id === "buttonC") {
        input.textContent = "";
        result.textContent = "";
    }

    //if button was "equals"
    else if(event.target.id === "buttonEquals") {
        if(operator === "") result.textContent = input.textContent;
        else {
        result.textContent = operate(operator, result.textContent, input.textContent);
        input.textContent = "";
        operator = "";
        }
        clickedOperator = "";
    }

    //if the button was any math operator
    else if (clickedOperator === "" && (event.target.id === "buttonPlus" ||
            event.target.id === "buttonMinus" ||
            event.target.id === "buttonTimes" ||
            event.target.id === "buttonDivide")) {
        
        //if the display (input, result) was empty, user can't choose an operator
        if(input.textContent === "" && result.textContent === "") return;
        
        //"click" the operator
        clickedOperator = event.target;
        clickedOperator.classList.add("clickedOperator");
        
        //execute an awaiting operation
        if(operator !== "") { 
            result.textContent = operate(operator, result.textContent, input.textContent);
            input.textContent = ""; 
        }
        
        //choose operator based on the button
        if(event.target.id === "buttonPlus") operator = "+";
        else if(event.target.id === "buttonMinus") operator = "-";
        else if(event.target.id === "buttonTimes") operator = "*";
        else if(event.target.id === "buttonDivide") operator = "/";
        
        //for example user entered 3 and clicked "=", it would just display 3 as the result
        if(result.textContent === "") result.textContent += input.textContent;
        input.textContent = "";      
    }  
}