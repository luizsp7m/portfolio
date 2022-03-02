import Link from "next/link";
import styles from "./styles.module.scss";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export function Hero() {
  return (
    <div id="home" className={styles.container}>
      <div data-aos="fade-down" className={styles.presentation}>
        <div className={styles.image}>
          <img src="https://github.com/luizsp7m.png" alt="Luiz" />
        </div>

        <h1>Luiz Oliveira</h1>
        <span>Desenvolvedor Front-end</span>
        <a href="/assets/curriculo.pdf" download="CV - Luiz Antonio S de Oliveira">Download CV</a>
      </div>

      <div data-aos="fade-up" className={styles.social}>
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

      <div data-aos="fade-up" className={styles.scroll}>
        <Link href="#about">
          <a>
            Scroll down
          </a>
        </Link>
      </div>
    </div>
  );
}