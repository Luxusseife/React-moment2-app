// Importerar CSS för komponenten.
import './Header.css'

// Komponenten tar emot webtitel som props. Specificerar typ som string.
function Header({ webtitle }: { webtitle: string }) {
  // Returnerar webtitel som en h1.
  return (
    <>
      <h1>{webtitle}</h1>
    </>
  )
}

// Exporterar komponenten.
export default Header
