import Link from "next/link";
import styles from "./styles.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FormEvent } from "react";

export function Contact() {
  function submitEmail(event: FormEvent) {
    event.preventDefault();
    
    alert("Oops, não implementei ainda 🐱‍🐉");
  }

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

          <form className={styles.form} onSubmit={submitEmail}>
            <input type="text" required={true} placeholder="Nome" />
            <input type="email" required={true} placeholder="E-mail" />
            <textarea rows={5} required={true} placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}