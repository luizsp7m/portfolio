import { About } from "../../types";

import styles from "./styles.module.scss";

interface Props {
  about: About;
}

export function About({ about }: Props) {
  return (
    <div id="sobre-mim" className={styles.container}>
      <h1>Um resumo sobre mim</h1>

      <div className={styles.row}>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: about.description }} />

        <div className={styles.image}>
          <img
            src="/assets/developer.svg"
            alt="Developer"
          />
        </div>
      </div>
    </div >
  );
}