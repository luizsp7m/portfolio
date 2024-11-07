import styles from "./styles.module.scss";

import Link from "next/link";

import { Project } from "../../types";
import { FiArrowRight } from "react-icons/fi";
import { ProjectCard } from "./components/ProjectCard";
import { Fragment, useState } from "react";
import { Modal } from "../Modal";
import { ProjectDetails } from "./components/ProjectDetails";

interface Props {
  projects: Array<Project>;
}

export function ProjectList({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal(project: Project) {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <Fragment>
      <div id="projetos" className={styles.container}>
        <div className={styles.row}>
          <h1>Projetos</h1>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>

        <div className={styles.row}>
          <Link href="/projetos/1">
            <a>
              Ver lista completa <FiArrowRight size={16} />
            </a>
          </Link>
        </div>
      </div>

      <Modal
        title={selectedProject?.title ?? ""}
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        removeBodyPadding
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </Fragment>
  );
}
