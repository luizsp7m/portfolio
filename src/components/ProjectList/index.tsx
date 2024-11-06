import styles from "./styles.module.scss";

import Link from "next/link";

import { Project } from "../../types";
import { FiArrowRight } from "react-icons/fi";
import { ProjectCard } from "./components/ProjectCard";

interface Props {
  projects: Array<Project>;
}

export function ProjectList({ projects }: Props) {
  return (
    <div id="projetos" className={styles.container}>
      <div className={styles.row}>
        <h1>Últimos projetos</h1>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className={styles.row}>
        <Link href="/projetos/1">
          <a>
            Ver lista completa <FiArrowRight size={16} />
          </a>
        </Link>
      </div>
    </div>
  );
}
