import Link from "next/link";
import styles from "./styles.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FormEvent } from "react";

export function Contact() {
  function submitEmail(event: FormEvent) {
    event.preventDefault();

    alert("Oops, não implementei ainda 🐱‍🐉");
  }

  return (
    <div id="contact" data-aos="fade-right" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Contato</h1>
        </div>

        <div className={styles.row}>
          <div className={styles.social}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <AiFillGithub size={22} />
              </div>

              <Link href="https://github.com/luizsp7m/">
                <a target="_blank">
                  https://github.com/luizsp7m/
                </a>
              </Link>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <IoLogoLinkedin size={22} />
              </div>

              <Link href="https://www.linkedin.com/in/luiz-oliveira-08/">
                <a target="_blank">
                  https://www.linkedin.com/in/luiz-oliveira-08/
                </a>
              </Link>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <MdEmail size={22} />
              </div>

              <Link href="mailto:luizoliveira2808@gmail.com">
                <a target="_blank">
                  luizoliveira2808@gmail.com
                </a>
              </Link>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <MdLocationPin size={22} />
              </div>

              <span>Ourinhos, São Paulo</span>
            </div>
          </div>

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