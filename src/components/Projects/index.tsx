import Link from "next/link";
import styles from "./styles.module.scss";

import { Project } from "../../types";
import { ProjectCard } from "../ProjectCard";
import { FiArrowRight } from "react-icons/fi";

interface ProjectsProps {
  projects: Array<Project>;
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div data-aos="fade-in" id="projects" className={styles.container}>
      <div className={styles.row}>
        <h1>Projetos</h1>
        <p>Principais projetos que desenvolvi durante minha trajetória como desenvolvedor Front-end</p>
        {/* <span>+ de 30 projetos desenvolvidos</span> */}

        <Link href="/projetos/page/1">
          <a>Ver lista completa <FiArrowRight size={16} /></a>
        </Link>
      </div>

      <div className={styles.projects}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            repository={project.repository}
            deploy={project.deploy}
            thumbnail={project.thumbnail.url}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}