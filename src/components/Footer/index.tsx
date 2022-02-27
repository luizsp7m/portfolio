import Link from "next/link";
import styles from "./styles.module.scss";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  paddingBottom?: boolean;
}

export function Footer({ paddingBottom = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${styles.container} ${paddingBottom && styles.paddingBottom}`}>
      <div className={styles.main}>
        <h5>Luiz Oliveira</h5>

        <nav>
          <a href="/#home">Início</a>
          <a href="/#about">Sobre mim</a>
          <a href="/#projects">Projetos</a>
          <a href="/#technologies">Tecnologias</a>
        </nav>

        <div className={styles.social}>
          <Link href="https://github.com/luizsp7m">
            <a target="_blank">
              <FaGithub size={20} />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/luiz-oliveira-08/">
            <a target="_blank">
              <FaLinkedinIn size={20} />
            </a>
          </Link>

          <Link href="mailto:luizoliveira2808@gmail.com">
            <a target="_blank">
              <FaEnvelope size={20} />
            </a>
          </Link>
        </div>

        <span>&copy; Luiz Oliveira {currentYear}. Todos os direitos reservados</span>
      </div>
    </div>
  );
}