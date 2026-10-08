function tuermeVonHanoi(hoehe: number, startStab: number = 1, zielStab: number = 3, hilfsStab: number = 2): string[] {
    // Abbruchbedingung: Wenn keine Scheiben mehr vorhanden sind
    if (hoehe <= 0) {
        return [];
    }

    // Schritt 1: Bewege die oberen (hoehe - 1) Scheiben vom Startstab auf den Hilfsstab
    const schritt1: string[] = tuermeVonHanoi(hoehe - 1, startStab, hilfsStab, zielStab);

    // Schritt 2: Bewege die größte verbleibende Scheibe direkt zum Zielstab
    const schritt2: string = "Bewege Scheibe " + hoehe + " von Stab " + startStab + " nach Stab " + zielStab;

    // Schritt 3: Bewege die (hoehe - 1) Scheiben vom Hilfsstab auf den Zielstab
    const schritt3: string[] = tuermeVonHanoi(hoehe - 1, hilfsStab, zielStab, startStab);

    return [...schritt1, schritt2, ...schritt3];
}

const turmHoehe: number = 10;
const alleZuege: string[] = tuermeVonHanoi(turmHoehe);

console.log("Lösung für Türme von Hanoi mit Höhe " + turmHoehe + ":");
for (const zug of alleZuege) {
    console.log(zug);
}
console.log("Gesamte Anzahl benötigter Züge: " + alleZuege.length);
