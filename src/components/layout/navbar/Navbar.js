import styles from "./Navbar.module.css";
import NavbarLeft from "./navbar-left/NavbarLeft";
import NavbarRight from "./navbar-right";

function Navbar() {
  return (
    <div className={`${styles.mainContainer} border-bottom-shadow`}>
      <NavbarLeft />
      <div className={styles.spacer} />
      <NavbarRight />
    </div>
  );
}

export default Navbar;
