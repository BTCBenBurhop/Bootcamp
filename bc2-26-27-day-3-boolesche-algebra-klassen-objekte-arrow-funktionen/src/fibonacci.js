"use strict";
let maxFibonacci;
function fibonacciUntilN(max) {
    const fibArr = [];
    let a = 0;
    let b = 1;
    while (a < max) {
        fibArr.push(a);
        [a, b] = [b, a + b];
    }
    return fibArr;
}
function setFibonacci() {
    const input1 = document.getElementById("input1");
    maxFibonacci = Number(input1.value);
    const result = fibonacciUntilN(maxFibonacci).toString();
    const divOutput = document.getElementById("output");
    if (divOutput && result) {
        divOutput.innerText = result;
    }
    return;
}
