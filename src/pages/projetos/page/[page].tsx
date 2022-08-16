import styles from "../../../styles/projects.module.scss";

import Link from "next/link";

import { GetStaticPaths, GetStaticProps } from "next";
import { CountProjectsResponse, GetProjectsResponse, GetTechnologiesResponse, Project, Technology } from "../../../types";
import { Layout } from "../../../components/Layout";
import { ProjectCard } from "../../../components/ProjectCard";
import { Filter } from "../../../components/Filter";
import { client } from "../../../services/apollo";
import { COUNT_PROJECTS_QUERY, GET_PROJECTS_QUERY, GET_TECHNOLOGIES_QUERY } from "../../../graphql/queries";

const ITEMS_PER_PAGE = 9;

interface Props {
  projects: Array<Project>;
  technologies: Array<Technology>;
  numberPages: number;
  currentPage: number;
}

export default function Projects({ projects, technologies, numberPages, currentPage }: Props) {
  return (
    <Layout title={`Projetos - Página ${currentPage}`} currentPage="projects">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.header}>
            <h1>Projetos</h1>
            <Filter technologies={technologies} />
          </div>

          <p>Lista de todos os projetos que foram desenvolvidos durante minha trajetória como desenvolvedor</p>

          <span>{numberPages === 0 ? (`
            Nenhum projeto cadastrado ou desenvolvido
          `) : (`
            Página ${currentPage} de ${numberPages}
          `)}</span>
        </div>

        <div className={styles.projects}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.pagination}>
          {Array.from(Array(numberPages), (item, index) => (
            <Link key={index} href={`/projetos/page/${index + 1}`}>
              <a className={`${styles.pagination_item} ${index + 1 === currentPage && styles.selected}`}>{index + 1}</a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: countProjects } = await client.query<CountProjectsResponse>({
    query: COUNT_PROJECTS_QUERY,
  });

  const numberPages = countProjects._allProjectsMeta.count === 0 ? 1 : Math.ceil(countProjects._allProjectsMeta.count / ITEMS_PER_PAGE);

  const paths = Array.from(Array(numberPages)).map((item, index) => {
    return {
      params: {
        page: String(index + 1),
      }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = Number(params.page);
  const startIndex = currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;

  const { data: projects } = await client.query<GetProjectsResponse>({
    query: GET_PROJECTS_QUERY,
    variables: {
      first: ITEMS_PER_PAGE,
      skip: startIndex,
    },
  });

  const { data: technologies } = await client.query<GetTechnologiesResponse>({
    query: GET_TECHNOLOGIES_QUERY,
  });

  const { data: countProjects } = await client.query<CountProjectsResponse>({
    query: COUNT_PROJECTS_QUERY,
  });

  const numberPages = Math.ceil(countProjects._allProjectsMeta.count / ITEMS_PER_PAGE);

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      numberPages,
      currentPage,
    },

    revalidate: 86400,
  }
}