"use strict";
function calculate(input1, input2, input3) {
    if (input2 === "+") {
        return (input1 + input3).toString();
    }
    else if (input2 === "-") {
        return (input1 - input3).toString();
    }
    else if (input2 === "*") {
        return (input1 * input3).toString();
    }
    else if (input2 === "/") {
        if (input3 === 0) {
            return "Teilen durch 0 nicht möglich";
        }
        return (input1 / input3).toString();
    }
    return "Ungültig";
}
function setCalculation() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const result = calculate(Number(input1.value), input2.value, Number(input3.value));
    const divOutput = document.getElementById("resulttext");
    if (divOutput && result) {
        divOutput.innerText = "Ergebnis: " + result;
    }
    return;
}
