import styles from "./styles.module.scss";

import { BiHomeAlt, BiUser, BiFolder } from "react-icons/bi";
import { ImStack } from "react-icons/im";

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
          <BiFolder size={20} />
        </a>

        <a href="#technologies">
          <ImStack size={20} />
        </a>
      </div>
    </div>
  );
}