import Link from "next/link";
import styles from "./styles.module.scss";

import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Technology } from "../../types";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  repository: string;
  deploy: string;
  thumbnail: string;
  technologies: Technology[];
  animation: boolean;
}

export function ProjectCard({
  id, title, description, repository, deploy, thumbnail, technologies, animation
}: ProjectCardProps) {
  return (
    <div data-aos={animation ? "fade-up" : ""} className={styles.container}>
      <div className={styles.projectImage}>
        <img src={thumbnail} alt={title} />

        <Link href={deploy} passHref>
          <a target="_blank">
            <FiExternalLink size={18} />
          </a>
        </Link>
      </div>

      <div className={styles.projectBody}>
        <h5>{title}</h5>
        <p>{description}</p>
        <Link href={repository} passHref>
          <a target="_blank">Ver repositório <FiArrowRight className={styles.icon} size={16} /></a>
        </Link>
        <div className={styles.technologies}>
          {technologies.map(technology => <Link key={technology.id} href={`/projects/${technology.slug}`} passHref>
            <a>{technology.name}</a>
          </Link>)}
        </div>
      </div>
    </div>
  );
}