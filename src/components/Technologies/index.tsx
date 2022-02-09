import styles from "./styles.module.scss";

import { Technology } from "../../types";

interface TechnologiesProps {
  technologies: Technology[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <div id="technologies" className={styles.container}>
      <div className={styles.wrapper}>
        <div data-aos="fade-right" className={styles.header}>
          <h1>Tecnologias</h1>
          <p>Principais tecnologias que eu tenho conhecimento e uso no dia a dia no desenvolvimento de aplicações</p>
        </div>

        <div className={styles.technologies}>
          {technologies.map(technology => technology.defaultVisible && (
            <div data-aos="fade-up" key={technology.id} className={styles.technology}>
              <img src={technology.logo.url} alt={technology.name} />
              <span>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}