function zerlegeEingabe(eingabe: string): string[] {
    const tokens: string[] = [];
    let aktuelleZahl: string = "";
    const operatorenUndKlammern: string[] = ["+", "-", "*", "/", "^", "(", ")"];

    for (let i: number = 0; i < eingabe.length; i++) {
        let zeichen: string = eingabe[i];
        if (zeichen === "–" || zeichen === "−") {
            zeichen = "-";
        }
        if (zeichen >= "0" && zeichen <= "9") {
            aktuelleZahl += zeichen;
        } else {
            if (aktuelleZahl !== "") {
                tokens.push(aktuelleZahl);
                aktuelleZahl = "";
            }
            if (operatorenUndKlammern.includes(zeichen)) {
                tokens.push(zeichen);
            } else if (zeichen !== " ") {
                console.log("Ungültiges Zeichen: " + zeichen);
            }
        }
    }
    if (aktuelleZahl !== "") {
        tokens.push(aktuelleZahl);
    }
    return tokens;
}

function berechneMitKlammern(tokens: string[]): void {
    while (tokens.includes("(")) {
        const indexKlammerAuf: number = tokens.lastIndexOf("(");
        const indexKlammerZu: number = tokens.indexOf(")", indexKlammerAuf);
        const klammerInhalt: string[] = tokens.slice(indexKlammerAuf + 1, indexKlammerZu);
        berechneOhneKlammern(klammerInhalt);
        tokens.splice(indexKlammerAuf, indexKlammerZu - indexKlammerAuf + 1, klammerInhalt[0]);
    }
    berechneOhneKlammern(tokens);
}

function berechneOhneKlammern(tokens: string[]): void {
    berechnePotenzen(tokens);                 // deine bisherige ^-Schleife
    berechneOperatoren(tokens, ["*", "/"]);
    berechneOperatoren(tokens, ["+", "-"]);
}

function berechnePotenzen(tokens: string[]): void {
    // Potenzen: von rechts nach links
    for (let i: number = tokens.length - 1; i >= 0; i--) {
        if (tokens[i] === "^") {
            const ergebnis: number = rechne(Number(tokens[i - 1]), "^", Number(tokens[i + 1]));
            tokens.splice(i - 1, 3, String(ergebnis));
        }
    }
}

function berechneOperatoren(tokens: string[], operatoren: string[]): void {
    let i: number = 0;
    while (i < tokens.length) {
        if (operatoren.includes(tokens[i])) {
            const ergebnis: number = rechne(Number(tokens[i - 1]), tokens[i], Number(tokens[i + 1]));
            tokens.splice(i - 1, 3, String(ergebnis));
        } else {
            i++;
        }
    }
}

function rechne(links: number, operator: string, rechts: number): number {
    if (operator === "+") return links + rechts;
    if (operator === "-") return links - rechts;
    if (operator === "*") return links * rechts;
    if (operator === "/" && rechts === 0) {
        console.log("Fehler: Division durch Null");
        return NaN;
    }
    if (operator === "/") return links / rechts;
    return links ** rechts;
}


const eingabe: string = "4+3*9^2";

const tokens: string[] = zerlegeEingabe(eingabe);

berechneMitKlammern(tokens);

console.log(tokens);

// 2^ (2+5) Ausgabe: 128
// 14 / (11 – (3+8)) Ausgabe: Fehler: Division durch Null
// 9 ^ ( 1 / 2 ) Ausgabe: 3
// 4 + 3 * 9 ^ 2 Ausgabe: 247