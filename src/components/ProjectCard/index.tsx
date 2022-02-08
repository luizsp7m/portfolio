import styles from "./styles.module.scss";

import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        <img src={image} alt="" />

        <Link href={url} passHref>
          <a target="_blank">
            <FiExternalLink size={18} color="var(--text-primary)" />
          </a>
        </Link>
      </div>

      <div className={styles.projectBody}>
        <h5>{title}</h5>
        <p>{description}</p>
        <div className={styles.tags}>
          <div className={styles.tag}>HTML</div>
          <div className={styles.tag}>CSS</div>
          <div className={styles.tag}>Javascript</div>
        </div>
      </div>
    </div>
  );
}