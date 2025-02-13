// Importerar CSS för komponenten.
import './Footer.css'

// Komponenten returnerar en div-container innehållandes en <p>-tagg med brödtext.
function Footer() {  
  return (
    <div className="footer">
      <p>&copy; Jenny Lind 2025</p>
    </div>
  )
}

// Exporterar komponenten.
export default Footer
