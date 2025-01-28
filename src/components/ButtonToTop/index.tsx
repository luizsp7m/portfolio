import styles from "./styles.module.scss";

import { RiArrowUpLine } from "react-icons/ri";

export function ButtonToTop() {
  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => scrollToTop()}
      aria-label="Voltar ao início da tela"
    >
      <RiArrowUpLine />
    </button>
  );
}
