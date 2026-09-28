const teile: string[] = ["10", "-", "3", "+", "2"]

berechnePlusUndMinus(teile);

function berechneHochUndMal (teile: string[]): void {
    // Potenzen: von rechts nach links
    for (let i = teile.length - 1; i >= 0; i--) {
        if (teile[i] === "^") {
        const links = Number(teile[i-1]);
        const rechts = Number(teile[i+1]);
        const ergebnis :number = links ** rechts;

        teile.splice(i-1, 3, String(ergebnis));
        }

    }

    // Multiplikation: von links nach rechts
    let i = 0;
    while (i < teile.length) {
        if (teile[i] === "*" || teile[i] === "/") {
            const links = Number(teile[i-1]);
            const rechts = Number(teile[i+1]);
            let ergebnis: number;
            if (teile[i] === "*") {
                ergebnis = links * rechts;
            }
            else {
                if (rechts === 0) {
                    console.log("Division durch 0 ist nicht erlaubt");
                    return;
                }
                else {
                    ergebnis = links / rechts;
                }
            }
            teile.splice(i-1, 3, String(ergebnis));
            i = 0;
        }
        else{
            i++;

        }
    }
}

function berechnePlusUndMinus(teile: string[]): void {
    let i = 0;
    while (i < teile.length){
        if(teile[i] === "+" || teile[i] === "-"){
            const links = Number(teile[i-1]);
            const rechts = Number(teile[i+1]);
            let ergebnis: number;
            if (teile[i] === "+"){
                ergebnis = links + rechts;
            }
            else {
                ergebnis = links - rechts;
            }
            teile.splice(i-1, 3, String(ergebnis));
            i = 0;
        }
        else{
            i++;
        }
    }
}

console.log(teile);
