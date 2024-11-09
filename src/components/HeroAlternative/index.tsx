import Link from "next/link";
import styles from "./styles.module.scss";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Curriculum } from "../../types/Curriculum";

interface Props {
  curriculum: Curriculum;
}

export function HeroAlternative({ curriculum }: Props) {
  return (
    <div className={styles.container}>
      <span>Olá, meu nome é</span>
      <h1>Luiz Oliveira</h1>
      <h2>Desenvolvedor Front-end</h2>

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
  );
}
