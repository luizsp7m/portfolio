import styles from "./styles.module.scss";

import Link from "next/link";

import { Technology } from "../../types";

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