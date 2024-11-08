import styles from "./styles.module.scss";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Curriculum } from "../../types/Curriculum";

interface Props {
  curriculum: Curriculum;
}

export function Hero({ curriculum }: Props) {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.image}>
          <img src="https://github.com/luizsp7m.png" alt="Luiz Oliveira" />
        </div>

        <h1>Luiz Oliveira</h1>
        <span>Desenvolvedor Front-end</span>

        <div className={styles.social}>
          <Link href="https://github.com/luizsp7m">
            <a target="_blank" aria-label="Abrir GitHub">
              <FaGithub size={20} />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/luiz-oliveira-08/">
            <a target="_blank" aria-label="Abrir LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </Link>

          <Link href="mailto:luizoliveira2808@gmail.com">
            <a target="_blank" aria-label="Abrir e-mail">
              <FaEnvelope size={20} />
            </a>
          </Link>
        </div>

        <Link href={curriculum.file.url}>
          <a target="_blank" aria-label="Baixar currículo">
            Download CV
          </a>
        </Link>
      </div>
    </div>
  );
}
