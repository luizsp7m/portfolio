import styles from "./styles.module.scss";

import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

interface Props {
  currentPage: "home" | "projects";
}

export function Footer({ currentPage }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className={`${styles.container} ${currentPage === "home" && styles.paddingBottom}`}>
      <div className={styles.main}>
        <h5>Luiz Oliveira</h5>

        <nav>
          <Link href="/#home">
            <a>Início</a>
          </Link>

          <Link href="/#about">
            <a>Sobre mim</a>
          </Link>

          <Link href="/#projects">
            <a>Projetos</a>
          </Link>

          <Link href="/#technologies">
            <a>Tecnologias</a>
          </Link>
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

        <span>&copy; Luiz Oliveira {currentYear}</span>
      </div>
    </div>
  );
}