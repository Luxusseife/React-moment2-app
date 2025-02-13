// Importerar komponenter, CSS och nödvändiga paket från React.
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import "./App.css";

// Skapar ett interface för strukturen på att göra-uppgifter.
interface TodoInterface {
  _id: string,
  title: string,
  description?: string,
  status: string
}

function App() {

  // Props för webbplats-namn. Skickas till header-komponenten.
  const appname = "MIN ATT GÖRA-LISTA"

  // States för komponenten.
  const [todos, setTodos] = useState<TodoInterface[] | []>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Anropar inhämtningsfunktionen.
  useEffect(() => {
    fetchData();
  }, []);

  // Hämtar att göra-uppgifter från API:et och hanterar "konsekvenserna" i form av svar/fel.
  const fetchData = async () => {
    // Gör ett anrop mot API:et.
    try {
      // Sätter laddnings-state till true.
      setLoading(true);

      // Anropet. Görs med fetchAPI.
      const res = await fetch("https://react-moment2-api.onrender.com/todo");

      // Felkontroll vid oväntat svar.
      if (!res.ok) {
        throw Error("Det blev en oväntat fel: " + res.status);
      }

      // Fortsättning på anropet - hämtar ut data.
      const data = await res.json();

      // Kontrollerar att datan faktiskt hämtas (vilket den gör).
      console.log(data);

      // Felkontroll vid inhämtningsfel.
    } catch (error) {
      setError("Det blev ett fel vid inhämtning av todos.");

      // Sätter laddnings-state till false när datahämtningen är slutförd.
    } finally {
      setLoading(false);
    }
  }

  // Huvudkomponenten returnerar en header, ett main och en footer.
  return (
    <>
      <Header webtitle={appname} />
      <main>

        {loading && <p>Laddar todos...</p>}

        {error && <p>{error}</p>}

      </main>
      <Footer />
    </>
  )
}

export default App
