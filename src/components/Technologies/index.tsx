import styles from "./styles.module.scss";

import data from "../../data.json";

export function Technologies() {
  const technologies = data.technologies;

  return (
    <div data-aos="fade-up" id="technologies" className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Tecnologias</h1>
        <p>Principais tecnologias que eu tenho conhecimento e uso no dia a dia no desenvolvimento de aplicações</p>
        <div className={styles.technologies}>
          { technologies.map((technology, index) => (
            <div key={index} className={styles.technology}>
              <img src={technology.image} alt={technology.name} />
              <span>{technology.name}</span>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}