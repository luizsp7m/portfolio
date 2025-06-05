import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "../../../../types/Project";
import { useRouter } from "next/router";

interface ProjectDetailsProps {
  project: Project;
  handleCloseModal: () => void;
}

export function ProjectDetails({
  project,
  handleCloseModal,
}: ProjectDetailsProps) {
  const router = useRouter();

  function handleNavigate(destination: string) {
    handleCloseModal();
    router.push(destination);
  }

  return (
    <div className={styles.container}>
      <div className={styles["project-image-wrapper"]}>
        <Link href={project.thumbnail.url}>
          <a target="_blank">
            <Image
              src={project.thumbnail.url}
              alt={`Imagem do projeto ${project.title}`}
              width={512}
              height={512 * (9 / 16)}
              placeholder="blur"
              blurDataURL={project.thumbnail.url}
              quality={100}
              objectFit="cover"
            />
          </a>
        </Link>
      </div>

      <div className={styles["project-details-body"]}>
        <span>Tecnologias: </span>

        <div className={styles["project-technologies"]}>
          {project.technologies.map((technology) => (
            <span
              key={technology.id}
              aria-label={`Ir para projetos desenvolvidos com ${technology.name}`}
              onClick={() => handleNavigate(`/projetos/${technology.slug}/1`)}
            >
              {technology.name}
            </span>
          ))}
        </div>

        <p>{project.description}</p>

        <div className={styles["project-external-links"]}>
          <Link href={project.deploy}>
            <a target="_blank">
              <button aria-label="Botão para ver prévia do projeto">
                <FiExternalLink size={18} />
                Ver prévia
              </button>
            </a>
          </Link>

          <Link href={project.repository}>
            <a target="_blank">
              <button aria-label="Botão para ver repositório do projeto">
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
