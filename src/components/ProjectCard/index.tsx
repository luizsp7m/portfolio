import Link from "next/link";
import styles from "./styles.module.scss";

import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Technology } from "../../types";

interface ProjectCardProps {
  title: string;
  description: string;
  repository: string;
  deploy: string;
  thumbnail: string;
  technologies: Array<Technology>;
}

export function ProjectCard({
  title, description, repository, deploy, thumbnail, technologies
}: ProjectCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.project_image}>
        <img src={thumbnail} alt={title} />

        <Link href={deploy}>
          <a target="_blank">
            <FiExternalLink size={18} />
          </a>
        </Link>
      </div>

      <div className={styles.project_body}>
        <h5>{title}</h5>
        <p>{description}</p>
        <Link href={repository}>
          <a target="_blank">Ver repositório <FiArrowRight size={16} /></a>
        </Link>

        <div className={styles.technologies}>
          {technologies.map(technology => (
            <Link key={technology.id} href="#">
              <a>
                {technology.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}