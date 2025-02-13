// Importerar CSS.
import "./Todo.css";

// Komponenten tar emot props i form av todo.
const Todo = ({ todo }: { todo: any }) => {

    // Hanterar statusfärg med en ternär operator.
    const statusColor = todo.status === "Ej påbörjad" ? "red" : todo.status === "Pågående" ? "orange" : "green";

    // Komponenten returnerar en sektion innehållandes en artikel och en span.
    return (
        <section>
            <article>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
            </article>

            <span style={{ color: statusColor }}><strong>{todo.status}</strong></span>
        </section>
    )
}

export default Todo