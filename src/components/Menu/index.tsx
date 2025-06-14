import styles from "./styles.module.scss";

import { BiHomeAlt, BiUser, BiFolder } from "react-icons/bi";
import { ImStack } from "react-icons/im";

export function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <a href="#home" aria-label="Ir para o inicio">
          <BiHomeAlt size={20} />
          <span>Início</span>
        </a>

        <a href="#sobre-mim" aria-label="Ir para sobre mim">
          <BiUser size={20} />
          <span>Sobre mim</span>
        </a>

        <a href="#projetos" aria-label="Ir para projetos">
          <BiFolder size={20} />
          <span>Projetos</span>
        </a>

        <a href="#tecnologias" aria-label="Ir para tecnologias">
          <ImStack size={20} />
          <span>Tecnologias</span>
        </a>
      </div>
    </div>
  );
}
