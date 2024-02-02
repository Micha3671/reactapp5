// Content.js
import styles from "./Content.module.css";
import UserComponent from "./Content.js"; // Annahme: Ihre Benutzerkomponente befindet sich in einer Datei namens 'UserComponent.js'

function Content({ userData }) {
  // Nehmen Sie an, dass Sie einen zufälligen Benutzer aus den übergebenen Daten auswählen
  const randomIndex = Math.floor(Math.random() * userData.length);
  const randomUser = userData[randomIndex];

  return (
    <div className={styles.contentmain}>
      <div>
        {/* Anzeige der Benutzerkomponente mit den zufälligen Benutzerdaten */}
        <UserComponent user={randomUser} />
      </div>
    </div>
  );
}

export default Content;
