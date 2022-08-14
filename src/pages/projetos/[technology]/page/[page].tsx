import styles from "../../../../styles/projects.module.scss";

import Link from "next/link";

import { GetStaticPaths, GetStaticProps } from "next";
import { Project, Technology } from "../../../../types";
import { Layout } from "../../../../components/Layout";
import { ProjectCard } from "../../../../components/ProjectCard";
import { Filter } from "../../../../components/Filter";
import { client } from "../../../../services/apollo";
import { COUNT_PROJECTS_QUERY, GET_PROJECTS_QUERY, GET_TECHNOLOGIES_QUERY, GET_TECHNOLOGY_QUERY } from "../../../../graphql/queries";

const ITEMS_PER_PAGE = 9;

interface Props {
  projects: Array<Project>;
  technologies: Array<Technology>;
  technology: Technology;
  numberPages: number;
  currentPage: number;
}

export default function Projects({ projects, technologies, technology, numberPages, currentPage }: Props) {
  return (
    <Layout title={`Projetos com ${technology.name} - Página ${currentPage}`} currentPage="projects">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.header}>
            <h1>Projetos</h1>
            <Filter technologies={technologies} />
          </div>

          <p>Lista de todos os projetos que foram desenvolvidos com {technology.name}</p>

          <span>Página {currentPage} de {numberPages}</span>
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
  const { data: technologies } = await client.query({
    query: GET_TECHNOLOGIES_QUERY
  });

  const counter = technologies.allTechnologies.map(async technology => {
    const { data: countProjects } = await client.query({
      query: COUNT_PROJECTS_QUERY,
      variables: {
        allIn: technology.id,
      }
    });

    let numberPages = Math.ceil(countProjects._allProjectsMeta.count / ITEMS_PER_PAGE);
    numberPages = numberPages > 0 ? numberPages : 1;

    return {
      technology: technology.slug,
      numberPages,
    }
  });

  const pages = await Promise.all(counter);

  let paths = [];

  pages.map(page => {
    for (let i = 0; i < page.numberPages; i++) {
      paths.push({
        params: {
          technology: page.technology,
          page: `${i + 1}`,
        }
      });
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

  const { data: technology } = await client.query({
    query: GET_TECHNOLOGY_QUERY,
    variables: {
      slug: params.technology,
    }
  });

  const { data: technologies } = await client.query({
    query: GET_TECHNOLOGIES_QUERY,
  });

  const { data: countProjects } = await client.query({
    query: COUNT_PROJECTS_QUERY,
    variables: {
      allIn: technology.technology.id,
    }
  });

  const { data: projects } = await client.query({
    query: GET_PROJECTS_QUERY,
    variables: {
      allIn: technology.technology.id,
      first: ITEMS_PER_PAGE,
      skip: startIndex,
    }
  });

  const numberPages = Math.ceil(countProjects._allProjectsMeta.count / ITEMS_PER_PAGE);

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      technology: technology.technology,
      numberPages,
      currentPage,
    },

    revalidate: 86400,
  }
}