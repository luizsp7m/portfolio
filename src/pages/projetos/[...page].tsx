import styles from "../../styles/projects.module.scss";
import Link from "next/link";

import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../layout";

import { client } from "../../lib/apollo";
import { Filter } from "../../components/Filter";
import { ProjectCard } from "../../components/ProjectList/components/ProjectCard";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { ProjectDetails } from "../../components/ProjectList/components/ProjectDetails";
import { Project } from "../../types/Project";
import { Technology } from "../../types/Technology";

import {
  COUNT_PROJECTS_QUERY,
  CountProjectsResponse,
} from "../../services/count-projects-query";

import {
  GET_TECHNOLOGIES_QUERY,
  GetTechnologiesResponse,
} from "../../services/get-technologies-query";

import {
  GET_PROJECTS_QUERY,
  GetProjectsResponse,
} from "../../services/get-projects-query";

import {
  GET_TECHNOLOGY_QUERY,
  GetTechnologyResponse,
} from "../../services/get-technology-query";
import { gql } from "@apollo/client";

const ITEMS_PER_PAGE = 6;

interface Props {
  projects: Array<Project>;
  technologies: Array<Technology>;
  technology?: Technology;
  numberPages: number;
  currentPage: number;
}

export default function Page({
  projects,
  technologies,
  technology,
  numberPages,
  currentPage,
}: Props) {
  const title = technology
    ? `Projetos com ${technology.name} - Página ${currentPage}`
    : `Projetos - Página ${currentPage}`;

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
    <Layout title={title}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.header}>
            <h1>Projetos</h1>
            <Filter technologies={technologies} />
          </div>

          {technology ? (
            <p>
              Lista de todos os projetos que foram desenvolvidos com{" "}
              {technology.name}
            </p>
          ) : (
            <p>
              Lista de todos os projetos que foram desenvolvidos durante minha
              trajetória como desenvolvedor
            </p>
          )}

          {numberPages > 0 ? (
            <span>
              Página {currentPage} de {numberPages}
            </span>
          ) : (
            <span>Nenhum projeto encontrado</span>
          )}
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

        <div className={styles.pagination}>
          {Array.from(Array(numberPages), (item, index) =>
            technology ? (
              <Link
                key={index}
                href={`/projetos/${technology.slug}/${index + 1}`}
              >
                <a
                  aria-label={`Ir para página ${index + 1}`}
                  className={`${styles.pagination_item} ${
                    index + 1 == currentPage && styles.selected
                  }`}
                >
                  {index + 1}
                </a>
              </Link>
            ) : (
              <Link key={index} href={`/projetos/${index + 1}`}>
                <a
                  aria-label={`Ir para página ${index + 1}`}
                  className={`${styles.pagination_item} ${
                    index + 1 == currentPage && styles.selected
                  }`}
                >
                  {index + 1}
                </a>
              </Link>
            )
          )}
        </div>
      </div>

      <Modal
        title={selectedProject?.title ?? ""}
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        removeBodyPadding
      >
        {selectedProject && (
          <ProjectDetails
            handleCloseModal={handleCloseModal}
            project={selectedProject}
          />
        )}
      </Modal>
    </Layout>
  );
}

async function getPathsWithoutTechnology() {
  const {
    data: {
      _allProjectsMeta: { count },
    },
  } = await client.query<CountProjectsResponse>({
    query: COUNT_PROJECTS_QUERY,
  });

  const numberPages = count === 0 ? 1 : Math.ceil(count / ITEMS_PER_PAGE);

  const paths = Array.from(Array(numberPages)).map((item, index) => {
    return {
      params: {
        page: [String(index + 1)],
      },
    };
  });

  return paths;
}

// async function getPathsWithTechnology() {
//   const { data: technologies } = await client.query<GetTechnologiesResponse>({
//     query: GET_TECHNOLOGIES_QUERY,
//   });

//   // const pages = await Promise.all(
//   //   technologies.allTechnologies.map(async (technology) => {
//   //     const {
//   //       data: {
//   //         _allProjectsMeta: { count },
//   //       },
//   //     } = await client.query<CountProjectsResponse>({
//   //       query: COUNT_PROJECTS_QUERY,
//   //       variables: {
//   //         allIn: technology.id,
//   //       },
//   //     });

//   //     const numberPages = count === 0 ? 1 : Math.ceil(count / ITEMS_PER_PAGE);

//   //     return { ...technology, numberPages };
//   //   })
//   // );

//   const pages = [];
//   const paths = [];

//   console.log({ pages });

//   pages.forEach((page) => {
//     for (let index = 1; index <= page.numberPages; index++) {
//       paths.push({
//         params: {
//           page: [`${page.slug}`, `${index}`],
//         },
//       });
//     }
//   });

//   return paths;
// }

function sanitizeAlias(slug: string) {
  return slug.replace(/[^a-zA-Z0-9]/g, "_"); // substitui hífens e outros por "_"
}

async function getPathsWithTechnology() {
  const { data: technologies } = await client.query<GetTechnologiesResponse>({
    query: GET_TECHNOLOGIES_QUERY,
  });

  const projectsByTechnologiesCountQuery = technologies.allTechnologies
    .map((technology) => {
      const slug = sanitizeAlias(technology.slug);
      const projectsByTechnologyCountQuery = `${slug}: _allProjectsMeta(filter: {technologies: {allIn: "${technology.id}"}}) { count }`;

      return projectsByTechnologyCountQuery;
    })
    .join();

  const { data: projectsByTechnologiesCount } = await client.query<{
    [key: string]: { count: number };
  }>({
    query: gql`
      query MyQuery {
        ${projectsByTechnologiesCountQuery}
      }
    `,
  });

  const projectsByTechnologiesNumberPages = Object.entries(
    projectsByTechnologiesCount
  ).map(([key, { count }]) => {
    const numberPages = count === 0 ? 1 : Math.ceil(count / ITEMS_PER_PAGE);

    const technology = technologies.allTechnologies.find(
      (technology) => sanitizeAlias(technology.slug) === key
    );

    return {
      slug: technology.slug,
      numberPages,
    };
  });

  const paths = [];

  projectsByTechnologiesNumberPages.forEach(
    (projectsByTechnologyNumberPages) => {
      for (let i = 1; i <= projectsByTechnologyNumberPages.numberPages; i++) {
        paths.push({
          params: {
            page: [`${projectsByTechnologyNumberPages.slug}`, `${i}`],
          },
        });
      }
    }
  );

  return paths;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...(await getPathsWithoutTechnology()),
    ...(await getPathsWithTechnology()),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params;

  const { data: technologies } = await client.query<GetTechnologiesResponse>({
    query: GET_TECHNOLOGIES_QUERY,
  });

  if (page.length === 1) {
    const [currentPage] = page as string[];

    const startIndex = Number(currentPage) * ITEMS_PER_PAGE - ITEMS_PER_PAGE;

    const { data: projects } = await client.query<GetProjectsResponse>({
      query: GET_PROJECTS_QUERY,
      variables: {
        first: ITEMS_PER_PAGE,
        skip: startIndex,
      },
    });

    const {
      data: {
        _allProjectsMeta: { count },
      },
    } = await client.query<CountProjectsResponse>({
      query: COUNT_PROJECTS_QUERY,
    });

    const numberPages = Math.ceil(count / ITEMS_PER_PAGE);

    return {
      props: {
        projects: projects.allProjects,
        technologies: technologies.allTechnologies,
        numberPages,
        currentPage,
      },
    };
  }

  const [slug, currentPage] = page as string[];

  const startIndex = Number(currentPage) * ITEMS_PER_PAGE - ITEMS_PER_PAGE;

  const { data: technology } = await client.query<GetTechnologyResponse>({
    query: GET_TECHNOLOGY_QUERY,
    variables: {
      slug,
    },
  });

  const { data: projects } = await client.query<GetProjectsResponse>({
    query: GET_PROJECTS_QUERY,
    variables: {
      first: ITEMS_PER_PAGE,
      skip: startIndex,
      allIn: technology.technology.id,
    },
  });

  const {
    data: {
      _allProjectsMeta: { count },
    },
  } = await client.query<CountProjectsResponse>({
    query: COUNT_PROJECTS_QUERY,
    variables: {
      allIn: technology.technology.id,
    },
  });

  const numberPages = Math.ceil(count / ITEMS_PER_PAGE);

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      technology: technology.technology,
      numberPages,
      currentPage,
    },
  };
};
