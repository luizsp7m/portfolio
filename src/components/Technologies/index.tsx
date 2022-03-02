import Link from "next/link";
import styles from "./styles.module.scss";

import { Technology } from "../../types";

interface TechnologiesProps {
  technologies: Array<Technology>;
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <div data-aos="fade-in" id="technologies" className={styles.container}>
      <div className={styles.row}>
        <h1>Tecnologias</h1>
        <p>Principais tecnologias que eu tenho conhecimento e uso no dia a dia no desenvolvimento de aplicações</p>
        {/* <span>Clique em alguma tecnologia para ver os projetos que foram desenvolvidos com ela</span> */}
      </div>

      <div className={styles.technologies}>
        { technologies.map(technology => (
          <Link key={technology.id} href={`/projetos/${technology.slug}/page/1`}>
            <a>
              <img src={technology.logo.url} alt={technology.name} />
              <span>{technology.name}</span>
            </a>
          </Link>
        )) }
      </div>
    </div>
  );
}