import styles from "./styles.module.scss";

import { useEffect } from "react";
import { VscColorMode } from "react-icons/vsc";

export function Header() {
  useEffect(() => {
    const header = document.querySelector("#header");

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        header.classList.add(styles.toggled);
      } else {
        header.classList.remove(styles.toggled);
      }
    });
  }, []);

  return (
    <div id="header" className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Logo</h1>

        <button>
          <VscColorMode size={22} color="#f0f0f5" />
        </button>
      </div>
    </div>
  );
}