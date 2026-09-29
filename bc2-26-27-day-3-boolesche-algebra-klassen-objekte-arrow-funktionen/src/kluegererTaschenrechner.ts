function zerlegeEingabe(eingabe: string): string[] {
    const teile: string[] = [];
    let zahl: string = "";

    for(let i: number = 0; i < eingabe.length; i++) {
        let zeichen: string = eingabe[i];
        if (zeichen === "–" || zeichen === "−") {
            zeichen = "-";
        }
        if (zeichen >= "0" && zeichen <= "9"){
            zahl += zeichen;
        }
        else {
            if (zahl !== "") {
                teile.push(zahl);
                zahl = "";
            }
            if (zeichen === " "){
                //Leerzeichen überspringen
            } else if (zeichen === "+" || zeichen === "-" || zeichen === "*" || zeichen === "/" || zeichen === "^" || zeichen === "(" || zeichen === ")") {
                teile.push(zeichen);
            } else {
                console.log("Ungültiges Zeichen: " + zeichen);
            }
        }
    }
    if (zahl !== "") {
        teile.push(zahl);
    }
    return teile;
}

function berechneMitKlammern (teile: string[]): void {
    let anfang :number = teile.lastIndexOf("(");

    while (anfang !== -1) {
        const ende :number = teile.indexOf(")", anfang + 1);
        const innen :string[] = teile.slice(anfang + 1, ende);
        berechneOhneKlammern(innen);
        const ergebnis :number = Number(innen[0]);
        teile.splice(anfang, ende - anfang + 1, String(ergebnis));
        anfang = teile.lastIndexOf("(");
    }
    berechneOhneKlammern(teile);
}

function berechneOhneKlammern (teile: string[]): void {
    berechneHochUndMal(teile);
    berechnePlusUndMinus(teile);
}

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
                    console.log("Division durch 0 ist nicht möglich");
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

const eingabe: string = "34*(11+35/6(8-9+11))";
const teile: string[] = zerlegeEingabe(eingabe);

berechneMitKlammern(teile);

console.log(teile);
