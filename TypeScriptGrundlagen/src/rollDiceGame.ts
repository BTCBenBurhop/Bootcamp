const arrPlayer: string[] = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"];
let arrResult: number[] = [];

for (let i = 0; i < arrPlayer.length; i++) {
    arrResult.push(Math.floor(Math.random() * 6) + 1);
}

for (let i = 0; i < arrPlayer.length; i++) {
    console.log(arrPlayer[i] + " warf eine " + arrResult[i]);
}

let counter: number = 0;

for (let i = 0; i < arrResult.length; i++) {
    const value = arrResult[i];
    if (value && value > counter) {
        counter = value;
    }
}

console.log();
console.log("Die höchste geworfene Zahl ist: " + counter);
console.log();
console.log("Der Gewinner bzw. die Gewinner ist/sind:");

for (let i = 0; i < arrResult.length; i++) {
    if (arrResult[i] === counter) {
        console.log(arrPlayer[i]);
    }
}

