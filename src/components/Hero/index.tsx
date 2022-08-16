import styles from "./styles.module.scss";

import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Curriculum } from "../../types";

interface Props {
  curriculum: Curriculum;
}

export function Hero({ curriculum }: Props) {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src="https://github.com/luizsp7m.png"
              alt="Luiz"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>

        <h1>Luiz Oliveira</h1>
        <span>Desenvolvedor Front-end</span>

        <Link href={curriculum.file.url}>
          <a target="_blank">Download CV</a>
        </Link>
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