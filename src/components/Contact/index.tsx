import Link from "next/link";
import styles from "./styles.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export function Contact() {
  return (
    <div id="contact" data-aos="fade-right" className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Contato</h1>

        <div className={styles.row}>
          {/* <div className={styles.social}>
            <div className={styles.item}>
              <AiFillGithub size={32} /> 
              <Link href="#" passHref>
                <a target="_blank">luizsp7m</a>
              </Link>
            </div>

            <div className={styles.item}>
              <IoLogoLinkedin size={32} /> 
              <Link href="#" passHref>
                <a target="_blank">luiz-oliveira-08</a>
              </Link>
            </div>

            <div className={styles.item}>
              <MdEmail size={32} /> 
              <Link href="#" passHref>
                <a target="_blank">luizoliveira3208@gmail.com</a>
              </Link>
            </div>
          </div> */}

          <form className={styles.form} action="#">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <textarea rows={5} placeholder="Mensagem"></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}