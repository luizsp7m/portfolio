import { ProjectCard } from "../ProjectCard";
import styles from "./styles.module.scss";

export function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Projetos</h1>

        <nav>
          <span>Todos</span>
          <span>Next.js</span>
          <span>React</span>
          <span>Vanilla</span>
        </nav>

        <div className={styles.projectList}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <div className={styles.pagination}>
          <div className={styles.paginationItem}>1</div>
          <div className={styles.paginationItem}>2</div>
          <div className={styles.paginationItem}>3</div>
          <div className={styles.paginationItem}>4</div>
        </div>
      </div>
    </div>
  );
}