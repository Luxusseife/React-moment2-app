// Importerar CSS, nödvändigt paket från React samt skapat interface.
import "./NewTodoForm.css"
import { useState } from "react"
import { TodoInterface } from "../App";

// Funktion som hanterar lägg till-formuläret. Tar emot props från huvudkomponenten.
const NewTodoForm = ({ onAdd }: { onAdd: (todo: TodoInterface) => void }) => {

    // States för komponenten. Status har defaultvärde "Ej påbörjad".
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("Ej påbörjad")
    const [error, setError] = useState<string>("");

    // Funktion som lägger till en ny att göra-uppgift.
    const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        // Förhindrar default-beteende.
        e.preventDefault();

        // Validerar titel. Minst 3 tecken lång.
        if (title.length < 3) {
            setError("Titel måste vara minst 3 tecken lång!");
            return;
        }

        // Validerar beskrivning. Max 200 tecken lång.
        if (description.length > 200) {
            setError("Beskrivning får max vara 200 tecken lång!");
            return;
        }

        // Skapar ett nytt objekt enligt interfacet, men utan _id som genereras automatiskt vid lagring.
        const newTodo: TodoInterface = {
            title,
            description,
            status
        };

        // Gör ett anrop mot API:et med metoden POST (skapa/lägga till).
        try {
            const res = await fetch("https://react-moment2-api.onrender.com/todo", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newTodo)
            });

            // Felkontroll vid oväntat svar.
            if (!res.ok) {
                throw Error("Fel uppstod när todon skulle läggas till: " + res.status);
            }

            // Hämtar det skapade objektet från API-svaret.
            const data: TodoInterface = await res.json();

            // TEST: console.log("Ny todo blev skapad:", data);

            // Anropar fetchData-funktionen i App-komponenten för att rendera om.
            onAdd(data);

            // Återställer formuläret efter lyckad lagring.
            setTitle("");
            setDescription("");
            setStatus("Ej påbörjad");

            // Felkontroll vid inhämtningsfel.
        } catch (error) {
            console.error("Fel uppstod vid inhämtning av todos: " + error);
        }
    }

    // Komponenten returnerar en sektion innehållandes ett formulär för att lägga till uppgifter.
    return (
        <>
            <section className="create-section">
                <h2 style={{ padding: "1rem 0 0 1rem" }}>Lägg till att göra-uppgift</h2>
                <form className="create-new-form" onSubmit={addTodo}>
                    <label htmlFor="title">Titel:</label>
                    <br />
                    <input type="text" name="title" id="title" placeholder="Ge uppgiften en titel" value={title} required
                        onChange={(e) => setTitle(e.target.value)} />

                    <br />
                    <label htmlFor="description">Beskrivning:</label>
                    <br />
                    <textarea name="description" id="description" placeholder="Ge uppgiften en beskrivning" value={description}
                        onChange={(e) => setDescription(e.target.value)} />

                    <br />
                    <label htmlFor="status">Välj status:</label>
                    <select name="status" id="status" value={status}
                        onChange={(e) => setStatus(e.target.value)}>

                        <option>Ej påbörjad</option>
                        <option>Pågående</option>
                        <option>Avklarad</option>
                    </select>
                    <br />
                    { /* Eventuella felmeddelanden. */}
                    {error && <p className="error">{error}</p>}
                    <br />
                    <button type="submit">Lägg till</button>
                </form>
            </section>

            <div className="line"></div>
        </>
    )
}

export default NewTodoForm
