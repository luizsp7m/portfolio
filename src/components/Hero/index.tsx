import styles from "./styles.module.scss";
import Particles from "react-tsparticles";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMouse } from "react-icons/fa";

export function Hero() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.wrapper}>
        <div data-aos="fade-down" className={styles.presentation}>
          <div className={styles.image}>
            <img src="https://github.com/luizsp7m.png" alt="Luiz, o Antonio" />
          </div>

          <h1>Luiz Oliveira</h1>
          <p>Desenvolvedor Front-end</p>

          <button type="button">
            Download CV
          </button>
        </div>

        <div data-aos="fade-up" className={styles.social}>
          <Link href="https://github.com/luizsp7m">
            <a target="_blank">
              <AiFillGithub size={24} />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/luiz-oliveira-08/">
            <a target="_blank">
              <IoLogoLinkedin size={24} />
            </a>
          </Link>

          <Link href="#">
            <a href="#">
              <MdEmail size={24} />
            </a>
          </Link>
        </div>

        <div data-aos="fade-up" className={styles.scroll}>
          <FaMouse className={styles.mouse} size={18} />
          <span>Scroll down</span>
        </div>
      </div>

      {/* <Particles
        options={{
          fpsLimit: 60,
          particles: {
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 2,
              straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
        }}
      /> */}
    </div>
  );
}