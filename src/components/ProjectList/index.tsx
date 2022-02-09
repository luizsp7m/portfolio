import Link from "next/link";
import styles from "./styles.module.scss";

import { ProjectCard } from "../ProjectCard";
import { Project } from "../../types";
import { FiArrowRight } from "react-icons/fi";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.wrapper}>
        <div data-aos="fade-right" className={styles.header}>
          <h1>Projetos</h1>
          <p>Principais projetos que desenvolvi durante minha trajetória como desenvolvedor Front-end</p>

          <Link href="/projects" passHref>
            <a>Ver lista completa <FiArrowRight className={styles.icon} size={18} /></a>
          </Link>
        </div>

        <div className={styles.main}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
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
    </div>
  );
}