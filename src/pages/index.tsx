import Head from "next/head";
import styles from "../styles/home.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail, MdOutlineMouse } from "react-icons/md";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Header />

        <div className={styles.presentation}>
          <img src="/assets/user-default.png" alt="user-default" />
          <h1>Luiz Oliveira</h1>
          <p>Desenvolvedor Front-end</p>

          <div className={styles.icons}>
            <AiFillGithub className={styles.icon} color="#f0f0f5" size={28} />
            <IoLogoLinkedin className={styles.icon} color="#f0f0f5" size={28} />
            <MdEmail className={styles.icon} color="#f0f0f5" size={28} />
          </div>

          <button type="button">Baixar CV</button>
        </div>

        <div className={styles.scrollDown}>
          <span>Scroll down</span>
          <MdOutlineMouse className={styles.icon} color="#f0f0f5" size={24} />
        </div>
      </div>

      <Projects />
    </div>
  );
}