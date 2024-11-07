import styles from "./styles.module.scss";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { FaGithub } from "react-icons/fa";
import { Project } from "../../../../types";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

interface Props {
  project: Project;
  handleOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, handleOpenModal }: Props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }

  function handleCloseDrawer() {
    setDrawerIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles["project-image"]}>
        <Image
          src={project.thumbnail.url}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={project.thumbnail.url}
          onClick={() => handleOpenModal(project)}
        />

        <Link href={project.repository}>
          <a target="_blank">
            <FaGithub size={18} />
          </a>
        </Link>
      </div>

      <div className={styles["project-body"]}>
        <h5>{project.title}</h5>

        <Link href={project.deploy}>
          <a target="_blank">Ver prévia</a>
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
                    className={clsx(styles["technology-link"], {
                      [styles.width]: project.technologies.length > 3,
                    })}
                  >
                    {technology.name}
                  </a>
                </Link>
              )
          )}

          {project.technologies.length > 3 && (
            <button onClick={handleOpenDrawer}>
              + {project.technologies.length - 3}
            </button>
          )}
        </div>

        <div
          className={clsx(styles["technologies-drawer"], {
            [styles["show-drawer"]]: drawerIsOpen,
          })}
        >
          <div className={styles["technologies-drawer-header"]}>
            <h5>Tecnologias: </h5>

            <button onClick={handleCloseDrawer}>
              <IoCloseSharp size={16} />
            </button>
          </div>

          <div className={styles["technologies-drawer-body"]}>
            {project.technologies.map((technology) => (
              <Link key={technology.id} href={`/projetos/${technology.slug}/1`}>
                <a className={styles["technology-link"]}>{technology.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
