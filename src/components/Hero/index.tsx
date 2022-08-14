import styles from "./styles.module.scss";

import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export function Hero() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.image}>
          <img src="https://github.com/luizsp7m.png" alt="Luiz" />
        </div>

        <h1>Luiz Oliveira</h1>
        <span>Desenvolvedor Front-end</span>
        <a href="/assets/Currículo - Luiz Antonio S. de Oliveira - 032022.pdf" download="Currículo - Luiz Antonio S de Oliveira">Download CV</a>
      </div>

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

      <div className={styles.scroll}>
        <Link href="#about">
          <a>
            Scroll down
          </a>
        </Link>
      </div>
    </div>
  );
}