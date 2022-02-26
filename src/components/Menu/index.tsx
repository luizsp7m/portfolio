import styles from "./styles.module.scss";

import { BiHomeAlt, BiUser, BiBriefcaseAlt2, BiBookAlt } from "react-icons/bi";

export function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <a href="#home">
          <BiHomeAlt size={20} />
        </a>

        <a href="#about">
          <BiUser size={20} />
        </a>

        <a href="#projects">
          <BiBriefcaseAlt2 size={20} />
        </a>

        <a href="#technologies">
          <BiBookAlt size={20} />
        </a>
      </div>
    </div>
  );
}