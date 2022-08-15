import styles from "./styles.module.scss";

import Link from "next/link";

import { Project } from "../../types";
import { ProjectCard } from "../ProjectCard";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  projects: Array<Project>;
}

export function ProjectList({ projects }: Props) {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.row}>
        <h1>Últimos Projetos</h1>
      </div>

      <div className={styles.projects}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link href="/projetos/page/1">
        <a>Ver lista completa <FiArrowRight size={16} /></a>
      </Link>
    </div>
  );
}