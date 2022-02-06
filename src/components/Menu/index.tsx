import styles from "./styles.module.scss";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBriefcaseAlt2, BiBook } from "react-icons/bi";

export function Menu() {
  return (
    <div className={styles.container}>
      <nav>
        <a href="#home" className={styles.selected}>
          <AiOutlineHome size={22} color="f0f0f5" />
        </a>

        <a href="#about">
          <AiOutlineUser size={22} color="f0f0f5" />
        </a>

        <a href="#projects">
          <BiBriefcaseAlt2 size={22} color="f0f0f5" />
        </a>

        <a href="#technologies">
          <BiBook size={22} color="f0f0f5" />
        </a>

        <a href="#contact">
          <BiMessageSquareDetail size={22} color="f0f0f5" />
        </a>
      </nav>
    </div>
  );
}