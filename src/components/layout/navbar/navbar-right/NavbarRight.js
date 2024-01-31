import AppData from "../../../../AppData";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavbarRight.module.css";

function NavbarRight() {
  return (
    <div className={styles.mainContainer}>
      <StandardBtn text={"Login"} />
      <div className={styles.spacer} />
      <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavbarRight;
