import styles from "./styles.module.scss";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "../../../../types";
import Link from "next/link";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className={styles.container}>
      <div className={styles["project-image"]}>
        <img src={project.thumbnail.url} alt={project.title} />
      </div>

      <div className={styles["project-details-body"]}>
        <div className={styles["project-technologies"]}>
          {project.technologies.map((technology) => (
            <span key={technology.id}>{technology.name}</span>
          ))}
        </div>

        <p>{project.description}</p>

        <div className={styles["project-external-links"]}>
          <Link href={project.repository}>
            <a target="_blank">
              <button>
                <FiExternalLink size={18} />
                Ver prévia
              </button>
            </a>
          </Link>

          <Link href={project.repository}>
            <a target="_blank">
              <button>
                <FaGithub size={18} />
                Ver repositório
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
