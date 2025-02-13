import "./NewTodoForm.css"

const NewTodoForm = () => {

    return (
        <>
            <section className="create-section">
                <h2 style= {{ padding: "1rem 0 0 1rem" }}>Lägg till att göra-uppgift</h2>
                <form className="create-new-form">
                    <label htmlFor="title">Titel:</label>
                    <br />
                    <input type="text" name="title" placeholder="Ge uppgiften en titel" required />
                    <br />
                    <label htmlFor="description">Beskrivning:</label>
                    <br />
                    <textarea name="description" placeholder="Ge uppgiften en beskrivning" />
                    <br />
                    <label htmlFor="status">Välj status:</label>
                    <select name="status" id="status" defaultValue="Ej påbörjad">
                        <option>Ej påbörjad</option>
                        <option>Pågående</option>
                        <option>Avklarad</option>
                    </select>
                    <br />
                    <button type="submit">Lägg till</button>
                </form>
            </section>

            <div className="line"></div>
        </>
    )
}

export default NewTodoForm
