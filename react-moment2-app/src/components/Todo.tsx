// Importerar CSS.
import "./Todo.css";

// Komponenten tar emot props i form av todo samt onUpdate.
const Todo = ({ todo, onUpdate }: { todo: any, onUpdate: Function }) => {

    // Hanterar statusfärg med en ternär operator.
    const statusColor = todo.status === "Ej påbörjad" ? "red" : todo.status === "Pågående" ? "sienna" : "green";

    // Asynkron funktion som hanterar statusändringar.
    const updateTodo = async (e: any) => {

        // Deklarerar en variabel för det nya värdet.
        let newStatus = e.target.value;

        // Ändrar endast status på todon, inte resten.
        const newTodo = { ...todo, status: newStatus };

        // Gör ett anrop mot API:et med metoden PUT (ändra/uppdatera).
        try {
            const res = await fetch("https://react-moment2-api.onrender.com/todo/" + todo._id, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newTodo)
            });

            // Felkontroll vid oväntat svar.
            if (!res.ok) {
                throw Error("Fel uppstod vid uppdateringen av todo: " + res.status);
            }

            // TEST: const data = res.json(); console.log(data);

            // Anropar fetchData-funktionen i App-komponenten för att rendera om.
            onUpdate();

            // Felkontroll vid inhämtningsfel.
        } catch (error) {
            console.error("Fel uppstod vid inhämtning av todos: " + error);
        }
    }

    // Asynkron funktion som hanterar radering av att göra-uppgifter.
    const deleteTodo = async () => {

        // Gör ett anrop mot API:et med metoden DELETE (radering).
        try {
            const res = await fetch("https://react-moment2-api.onrender.com/todo/" + todo._id, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            });

            // Felkontroll vid oväntat svar.
            if (!res.ok) {
                throw Error("Fel uppstod vid radering av todo: " + res.status);
            }

            // TEST: console.log("Raderad todo: " + todo._id);

            // Anropar fetchData-funktionen i App-komponenten för att rendera om.
            onUpdate();

            // Felkontroll vid inhämtningsfel.
        } catch (error) {
            console.error("Fel uppstod vid inhämtning av todos: " + error);
        }
    }

    // Komponenten returnerar en sektion innehållandes en artikel och en span.
    return (
        <section className="todo-section">
            <div>
                <article>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </article>

                <span style={{ color: statusColor }}><strong>{todo.status}</strong></span>
            </div>

            <div className="line"></div>

            <form className="status-delete-form" style={{ padding: "1rem" }}>
                <div><label htmlFor="status"><strong>Ändra status: </strong></label>
                    <br />
                    <select name="status" id="status" defaultValue={todo.status}
                        onChange={updateTodo}>
                        <option>Ej påbörjad</option>
                        <option>Pågående</option>
                        <option>Avklarad</option>
                    </select>
                </div>
                <div>
                    <p><strong>Radera todo: </strong></p>
                    <button type="button" onClick={deleteTodo}
                        style={{ cursor: "pointer" }}>Radera</button>
                </div>
            </form>

        </section>
    )
}

export default Todo