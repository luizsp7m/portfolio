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

        <a href="#sobre-mim">
          <BiUser size={20} />
        </a>

        <a href="#projetos">
          <BiFolder size={20} />
        </a>

        <a href="#tecnologias">
          <ImStack size={20} />
        </a>
      </div>
    </div>
  );
}