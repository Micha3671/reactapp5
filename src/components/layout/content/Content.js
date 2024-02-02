// Content.js
import styles from "./Content.module.css";
import UserComponent from "./../../../UserComponent.js";

function Content({ userData }) {
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
