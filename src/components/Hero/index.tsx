import styles from "./styles.module.scss";
import Particles from "react-tsparticles";

import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMouse } from "react-icons/fa";

export function Hero() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src="/assets/user-default.png" alt="user-default" />
          {/* <img src="https://github.com/luizsp7m.png" alt="user-default" /> */}
        </div>
        
        <h1>Luiz Oliveira</h1>
        <p>Desenvolvedor Front-end</p>

        <button type="button">
          Contato
          <AiOutlineDownload className={styles.iconButtonAnimation} size={18} />
        </button>

        <div className={styles.social}>
          <a href="#">
            <AiFillGithub size={24} />
          </a>

          <a href="#">
            <IoLogoLinkedin size={24} />
          </a>

          <a href="#">
            <MdEmail size={24} />
          </a>
        </div>

        <div className={styles.scroll}>
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