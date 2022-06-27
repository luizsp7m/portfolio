import Link from "next/link";
import Head from "next/head";
import styles from "../../../../styles/projects.module.scss";

import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../../../components/Header";
import { Project, Technology } from "../../../../types";
import { ProjectCard } from "../../../../components/ProjectCard";
import { Footer } from "../../../../components/Footer";
import { Filter } from "../../../../components/Filter";
import { client } from "../../../../services/apollo";

import { GET_ALL_TECHNOLOGIES_QUERY, GET_COUNT_PROJECTS_QUERY, GET_PROJECTS_BY_TECHNOLOGY, GET_TECHNOLOGY_BY_SLUG } from "../../../../graphql/queries";

const ITEMS_PER_PAGE = 9;

interface ProjectsProps {
  projects: Array<Project>;
  technologies: Array<Technology>;
  technology: Technology;
  numberPages: number;
  currentPage: number;
}

export default function Projects({ projects, technologies, technology, numberPages, currentPage }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projetos com {technology.name} - Página {currentPage}</title>
      </Head>

      <div className={styles.container}>
        <Header to="home" />

        <div className={styles.main}>
          <div className={styles.row}>
            <div className={styles.header}>
              <h1>Projetos</h1>
              <Filter technologies={technologies} />
            </div>

            <p>Lista de projetos desenvolvidos com {technology.name}</p>

            <span>Página {currentPage} de {numberPages}</span>
          </div>

          <div className={styles.projects}>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                repository={project.repository}
                deploy={project.deploy}
                thumbnail={project.thumbnail.url}
                technologies={project.technologies}
              />
            ))}
          </div>

          <div className={styles.pagination}>
            {Array.from(Array(numberPages), (item, index) => (
              <Link key={index} href={`/projetos/${technology.slug}/page/${index + 1}`}>
                <a className={`${styles.pagination_item} ${index + 1 === currentPage && styles.selected}`}>{index + 1}</a>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: technologies } = await client.query({
    query: GET_ALL_TECHNOLOGIES_QUERY,
  });

  const counter = technologies.allTechnologies.map(async technology => {
    const { data: countProjects } = await client.query({
      query: GET_COUNT_PROJECTS_QUERY,
      variables: {
        allIn: technology.id,
      },
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
    query: GET_TECHNOLOGY_BY_SLUG,
    variables: {
      slug: params.technology,
    }
  });

  const { data: technologies } = await client.query({
    query: GET_ALL_TECHNOLOGIES_QUERY,
  });

  const { data: countProjects } = await client.query({
    query: GET_COUNT_PROJECTS_QUERY,
    variables: {
      allIn: technology.allTechnologies[0].id,
    },
  });

  const { data: projects } = await client.query({
    query: GET_PROJECTS_BY_TECHNOLOGY,
    variables: {
      allIn: technology.allTechnologies[0].id,
      first: ITEMS_PER_PAGE,
      skip: startIndex,
    },
  });

  const numberPages = Math.ceil(countProjects._allProjectsMeta.count / ITEMS_PER_PAGE);

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      technology: technology.allTechnologies[0],
      numberPages,
      currentPage,
    },

    revalidate: 86400,
  }
}