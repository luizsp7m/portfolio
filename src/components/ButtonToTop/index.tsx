import styles from "./styles.module.scss";

import { scrollToTop } from "../../utils/scroll-to-top";
import { RiArrowUpLine } from "react-icons/ri";

export function ButtonToTop() {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => scrollToTop()}
    >
      <RiArrowUpLine />
    </button>
  );
}
