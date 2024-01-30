import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbarmain}>
      <div>
        <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <button className={`btn btn-primary ${styles.button}`}>
              Finstagram
            </button>
          </div>
          <div className={styles.navRight}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="/login" className={styles.navLink}>
                  Anmelden
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/register" className={styles.navLink}>
                  Registrieren
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
