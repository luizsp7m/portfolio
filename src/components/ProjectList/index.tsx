import styles from "./styles.module.scss";
import data from "../../data.json";

import { ProjectCard } from "../ProjectCard";

export function ProjectList() {
  const projects = data.projects;

  return (
    <div data-aos="fade-right" id="projects" className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Projetos</h1>

        <nav>
          <button className={styles.selected}>Todos</button>
          <button>Next.js</button>
          <button>React</button>
          <button>Vanilla</button>
        </nav>

        <div className={styles.projectList}>
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          <div className={`${styles.paginationItem} ${styles.selected}`}>1</div>
          <div className={styles.paginationItem}>2</div>
          <div className={styles.paginationItem}>3</div>
          <div className={styles.paginationItem}>4</div>
        </div>
      </div>
    </div>
  );
}