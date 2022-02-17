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
          <Link href="/#home" passHref>
            <a>Início</a>
          </Link>

          <Link href="/#about">
            <a href="#home">Sobre mim</a>
          </Link>

          <Link href="/#projects">
            <a href="#home">Projetos</a>
          </Link>

          <Link href="/#tecnologies">
            <a href="#home">Tecnologias</a>
          </Link>

          <Link href="/#contact">
            <a href="#home">Contato</a>
          </Link>
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