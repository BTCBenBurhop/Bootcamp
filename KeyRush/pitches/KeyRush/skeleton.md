# KeyRush

![KeyRush Spielskizze](ChatGPT%20Image%207.%20Sept.%202026,%2007_50_02.png)

KeyRush ist ein schnelles, kompetitives Tippduell für zwei Spieler an separaten Geräten. Beide Kontrahenten treten unter festem Zeitdruck gegeneinander an, um nacheinander vorgegebene Sätze fehlerfrei über die Tastatur einzugeben. Gewonnen hat am Ende, wer nach Ablauf der Rundenzeit die meisten Sätze erfolgreich bewältigt hat.

# Spielregeln

- Feste Rundenzeit: Jede Partie dauert exakt 5 Minuten ohne künstliche Unterbrechungen.
- Eingabeprinzip: Beide Spieler tippen denselben Pool an zufällig ausgewählten Sätzen ab.
- Fehlerblockade: Erst wenn ein aktueller Satz komplett fehlerfrei eingegeben wurde, erscheint der nächste Satz. Ein Tippfehler blockiert das Weiterkommen, bis die korrekte Taste gedrückt wird.
- Rollenverteilung: Ein Spieler startet als Team Rot, der gegnerische Spieler als Team Blau.
- Transparenz: Vor dem Spielstart wird ein kompakter Regelbildschirm verbindlich eingeblendet.
- Siegbedingung: Gewinner ist der Spieler mit den meisten vollständig abgetippten Sätzen nach 5 Minuten.
- Tie-Breaker: Bei Satzgleichstand entscheidet die höhere prozentuale Treffergenauigkeit über den Gesamtsieg.

# Spielablauf

1. Spielvorbereitung: Beide Spieler verbinden sich als Multi-Clients von separaten Geräten aus und erhalten ihre Zuweisung zu Team Rot oder Team Blau.
2. Regelanzeige: Vor Beginn bestätigt ein kompakter Regelbildschirm die Rahmenbedingungen.
3. Rundenstart: Der 5-Minuten-Countdown beginnt synchron für beide Clients.
4. Kontinuierliches Tippen: Die Spieler tippen den jeweils angezeigten Satz ab. Wird ein Zeichen falsch getippt, stoppt der Cursor, bis die Korrektur erfolgt ist.
5. Live-Tracking: Am unteren Bildschirmrand verfolgen beide Spieler jederzeit den aktuellen Satzvorsprung in Echtzeit.
6. Rundenende: Nach Ablauf der 5 Minuten endet das Spiel automatisch, wertet die Satzanzahl sowie Treffergenauigkeit aus und kürt den Sieger.

# Begründung

KeyRush eignet sich für das Bootcamp, da es eine klare, hochgradig faire und deterministische Spielmechanik bietet, die rein auf Präzision und Geschwindigkeit beruht.  
# Rahmenbedingungen

- Multi-Client-Fähigkeit: Zwei Spieler treten an separaten Geräten über eine Client-Server-Architektur gegeneinander an.
- Spieldauer: Eine strikt vorgegebene Rundenzeit von genau 5 Minuten sorgt für klare zeitliche Grenzen pro Match.
- Fairness und Chancengleichheit: Es existiert kein Entwicklervorteil durch Vorwissen, da alle Sätze zufällig generiert bzw. zugewiesen werden und ausschließlich die manuelle Tippleistung zählt.
- Kein Glücksspiel: Der Spielausgang ist vollständig skillbasiert; Zufallselemente wie Würfel oder Beutezüge existieren nicht.
- Transparenz: Ein vorgeschalteter Regelbildschirm stellt sicher, dass alle Spielregeln vor Spielbeginn für beide Teilnehmer ersichtlich sind.
- Eindeutige Siegermittlung: Durch die feste Kombination aus Satzanzahl und dem Tie-Breaker (Treffergenauigkeit) ist ein unentschiedener Ausgang praktisch ausgeschlossen.