import AppData from "../../../../utils/AppData";
import styles from "./NavbarLeft.module.css";

function NavbarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={AppData.logo} alt="logo" />
    </div>
  );
}

export default NavbarLeft;
