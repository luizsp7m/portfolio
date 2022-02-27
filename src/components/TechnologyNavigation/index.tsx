import Link from "next/link";
import styles from "./styles.module.scss";

import { Technology } from "../../types";

interface TechnologyNavigationProps {
  technologies: Array<Technology>;
  technologyId?: string;
}

export function TechnologyNavigation({ technologies, technologyId = "" }: TechnologyNavigationProps) {
  return (
    <div className={styles.container}>
      {technologies.map(technology => (
        <Link href={`/projetos/${technology.slug}/page/1`}>
          <a className={`${styles.technology} ${technologyId === technology.id && styles.selected}`}>
            <img src={technology.logo.url} alt={technology.name} />
            <span>{technology.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}