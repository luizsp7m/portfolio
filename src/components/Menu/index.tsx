import styles from "./styles.module.scss";
import Scrollspy from "react-scrollspy";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBriefcaseAlt2, BiBook } from "react-icons/bi";

export function Menu() {
  return (
    <div className={styles.container}>
      <Scrollspy className={styles.navbar} items={['home', 'about', 'projects', 'technologies', 'contact']} currentClassName={styles.selected}>
        <a href="#home">
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
      </Scrollspy>
    </div>
  );
}