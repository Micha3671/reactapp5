import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.headermain}>
      <div>
        <h1 className={styles.headerText}>
          Hier kommen die Infos zur Finstagram-Seite
        </h1>
      </div>
    </div>
  );
}

export default Header;
