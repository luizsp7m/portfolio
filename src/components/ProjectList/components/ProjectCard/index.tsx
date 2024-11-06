import styles from "./styles.module.scss";

import Link from "next/link";
import Image from "next/image";

import { FiExternalLink } from "react-icons/fi";
import { Project } from "../../../../types";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.project_image}>
        <Image
          src={project.thumbnail.url}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={project.thumbnail.url}
        />

        <Link href={project.deploy}>
          <a target="_blank">
            <FiExternalLink size={18} />
          </a>
        </Link>
      </div>

      <div className={styles.project_body}>
        <h5>{project.title}</h5>

        {/* <p>{project.description}</p> */}

        <Link href={project.repository}>
          <a target="_blank">
            Ver repositório
            {/* <FiArrowRight size={16} /> */}
          </a>
        </Link>

        <div className={styles.technologies}>
          {project.technologies.map(
            (technology, index) =>
              index < 3 && (
                <Link
                  key={technology.id}
                  href={`/projetos/${technology.slug}/1`}
                >
                  <a
                    className={`${
                      project.technologies.length > 3 && styles.width
                    }`}
                  >
                    {technology.name}
                  </a>
                </Link>
              )
          )}

          {project.technologies.length > 3 && (
            <span>
              + {project.technologies.length - 3}
              <div className={styles.popover_area}>
                <div className={styles.popover}>
                  {project.technologies.map(
                    (technology, index) =>
                      index >= 3 && (
                        <Link
                          key={technology.id}
                          href={`/projetos/${technology.slug}/1`}
                        >
                          <a>{technology.name}</a>
                        </Link>
                      )
                  )}
                </div>
              </div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
