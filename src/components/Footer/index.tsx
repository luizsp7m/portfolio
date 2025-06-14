import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { CONTACT } from "../../constants/contact";

interface Props {
  isHomepage: boolean;
}

export function Footer({ isHomepage = false }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className={clsx(styles.container, {
        [styles.paddingBottom]: isHomepage,
      })}
    >
      <div className={styles.main}>
        <h6>Luiz Oliveira</h6>

        <nav>
          <Link href="/#home">
            <a aria-label="Ir para início">Início</a>
          </Link>

          <Link href="/#sobre-mim">
            <a aria-label="Ir para sobre mim">Sobre mim</a>
          </Link>

          <Link href="/#projetos">
            <a aria-label="Ir para projetos">Projetos</a>
          </Link>

          <Link href="/#tecnologias">
            <a aria-label="Ir para tecnologias">Tecnologias</a>
          </Link>
        </nav>

        <div className={styles.social}>
          <Link href={CONTACT.GITHUB_PROFILE_URL}>
            <a target="_blank" aria-label="Abrir GitHub">
              <FaGithub size={20} />
            </a>
          </Link>

          <Link href={CONTACT.LINKEDIN_PROFILE_URL}>
            <a target="_blank" aria-label="Abrir LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </Link>

          <Link href={`mailto:${CONTACT.EMAIL}`}>
            <a target="_blank" aria-label="Abrir e-mail">
              <FaEnvelope size={20} />
            </a>
          </Link>
        </div>

        <span>&copy; Luiz Oliveira {currentYear}</span>
      </div>
    </footer>
  );
}
