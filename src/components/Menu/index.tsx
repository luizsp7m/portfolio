import styles from "./styles.module.scss";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBriefcaseAlt2, BiBook } from "react-icons/bi";

export function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <a href="#home">
          <AiOutlineHome size={20} color="f0f0f5" />
        </a>

        <a href="#about">
          <AiOutlineUser size={20} color="f0f0f5" />
        </a>

        <a href="#projects">
          <BiBriefcaseAlt2 size={20} color="f0f0f5" />
        </a>

        <a href="#technologies">
          <BiBook size={20} color="f0f0f5" />
        </a>
      </div>
    </div>
  );
}