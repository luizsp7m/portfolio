import styles from "./styles.module.scss";

import { BsArrowRightShort } from "react-icons/bs";

export function Contact() {
  return (
    <div id="contact" data-aos="fade-right" className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Contato</h1>

        <div className={styles.grid}>
          <div className={styles.info}>
            🚧🚨🚧🚨🚧
          </div>

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