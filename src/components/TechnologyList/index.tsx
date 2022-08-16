import styles from "./styles.module.scss";

import { Technology } from "../../types";
import { TechnologyItem } from "../TechnologyItem";

interface Props {
  technologies: Array<Technology>;
}

export function TechnologyList({ technologies }: Props) {
  return (
    <div id="technologies" className={styles.container}>
      <div className={styles.row}>
        <h1>Tecnologias</h1>
        <p>Principais tecnologias que eu tenho conhecimento e uso no dia a dia no desenvolvimento de aplicações</p>
      </div>

      <div className={styles.technologies}>
        {technologies.map(technology => (
          <TechnologyItem key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}