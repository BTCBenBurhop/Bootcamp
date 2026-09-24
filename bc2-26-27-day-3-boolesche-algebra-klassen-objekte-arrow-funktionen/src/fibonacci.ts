function fibonacciUntilN(max: number): number[] {
    const fibArr: number[] = [];
    let a = 0;
    let b = 1;

    while (a < max) {
        fibArr.push(a);
        [a, b] = [b, a + b];
    }

    return fibArr;
}

function setFibonacci() {
    const input1 = document.getElementById("input1") as HTMLInputElement;
    const result :string = fibonacciUntilN(parseInt(input1.value)).toString();
    const divOutput = document.getElementById("output");

    if (divOutput && result) {
        divOutput.innerText = result;
    }
    return;
}