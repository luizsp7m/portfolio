import Link from "next/link";
import styles from "./styles.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

interface FooterProps {
  paddingBottom?: boolean;
}

export function Footer({ paddingBottom }: FooterProps) {
  return (
    <div className={`${styles.container} ${paddingBottom && styles.paddingHome}`}>
      <div className={styles.wrapper}>
        <h1>Logo</h1>

        <nav className={styles.navbar}>
          <a href="#home">Início</a>
          <a href="#about">Sobre mim</a>
          <a href="#projects">Projetos</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className={styles.social}>
          <Link href="https://github.com/luizsp7m/" passHref>
            <a target="_blank">
              <AiFillGithub size={24} />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/luiz-oliveira-08/" passHref>
            <a target="_blank">
              <IoLogoLinkedin size={24} />
            </a>
          </Link>

          <Link href="mailto:luizoliveira2808@gmail.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <MdEmail size={24} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}