# Moment 2, Fördjupad frontend-utveckling

Min lösning av denna uppgift blev en enkel att göra-lista enligt instruktion.

## Komponenter
Jag har skapat fyra olika komponenter där **Header** hanterar sidhuvudet med en dynamisk titel (prop) medans **Footer** sköter sidfoten med statisk copyright-information. 

- Komponenten **Todo** hanterar enskilda att göra-uppgifter med titel, beskrivning och aktuell status. Statusen färgsätts dynamiskt med en ternär operator och statusen blir röd, brun eller grön beroende på statusens värde. Komponenten ger användaren möjlighet att uppdatera uppgiftens status via en dropdown select-meny eller radera den via en knapp. Vid uppdatering (PUT) och radering (DELETE) sker kommunikation med ett backend-API.

- Komponenten **NewTodoForm** hanterar formuläret för att lägga till nya att göra-uppgifter med titel, beskrivning och status. Det görs en validering av input innan en POST-förfrågan till ett backend-API görs. Vid lyckad lagring återställs formuläret.

Samtliga komponenter har en egen CSS-fil som styr deras utseende och något enstaka element har även lite inline-style.

## Huvudfilen
Huvudfilen sköter hantering av att-göra-uppgifter genom att hämta, visa och skapa nya uppgifter. Här definieras ett interface för uppgifternas struktur och samtliga skapade komponenter används. Med ett GET-anrop till ett backend-API hämtas alla uppgifter och visas i en lista, där användaren kan uppdatera eller radera dem. Huvudfilen hanterar även laddningstillstånd och felmeddelanden för att säkerställa en smidig användarupplevelse.

CSS för huvudfilen hanteras via dess style-fil där regler för mer generella delar sätts. 

### _Skapad av Jenny Lind, jeli2308._