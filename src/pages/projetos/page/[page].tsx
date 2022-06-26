import Link from "next/link";
import Head from "next/head";
import styles from "../../../styles/projects.module.scss";

import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../../components/Header";
import { Project, Technology } from "../../../types";
import { ProjectCard } from "../../../components/ProjectCard";
import { Footer } from "../../../components/Footer";
import { Filter } from "../../../components/Filter";
import { client } from "../../../services/apollo";
import { gql } from "@apollo/client";

const ITEMS_PER_PAGE = 9;

const GET_COUNT_PROJECTS_QUERY = gql`
  query MyQuery($allIn: [ItemId]) {
    _allProjectsMeta(filter: {display: {eq: "true"}, technologies: {allIn: $allIn}}) {
      count
    }
  }
`;

const GET_ALL_TECHNOLOGIES_QUERY = gql`
  query MyQuery {
    allTechnologies(filter: {display: {eq: "true"}}) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;

const GET_PROJECTS_BY_TECHNOLOGY = gql`
  query GET_PROJECTS_BY_TECHNOLOGY($allIn: [ItemId], $first: IntType = 9, $skip: IntType = 0) {
    allProjects(filter: {technologies: {allIn: $allIn}, display: {eq: "true"}}, orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      description
      deploy
      repository
      thumbnail {
        url
      }
      technologies {
        id
        name
        slug
        logo {
          url
        }
      }
    }
  }
`;

interface ProjectsProps {
  projects: Array<Project>;
  technologies: Array<Technology>;
  numberPages: number;
  currentPage: number;
}

export default function Projects({ projects, technologies, numberPages, currentPage }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projetos - Página {currentPage}</title>
      </Head>

      <div className={styles.container}>
        <Header to="home" />

        <div className={styles.main}>
          <div className={styles.row}>
            <div className={styles.header}>
              <h1>Projetos</h1>
              <Filter technologies={technologies} />
            </div>

            <p>Lista de todos os projetos que desenvolvi durante minha trajetória como desenvolvedor Front-end</p>

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
              <Link key={index} href={`/projetos/page/${index + 1}`}>
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
  const { data } = await client.query({
    query: GET_COUNT_PROJECTS_QUERY,
  });

  const numberPages = Math.ceil(data._allProjectsMeta.count / ITEMS_PER_PAGE);

  let paths = [];

  for (let i = 0; i < numberPages; i++) {
    paths.push({ params: { page: `${i + 1}` } });
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {  
  const currentPage = Number(params.page);
  const startIndex = currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;

  const { data: technologies } = await client.query({
    query: GET_ALL_TECHNOLOGIES_QUERY,
  });

  const { data: countProjects } = await client.query({
    query: GET_COUNT_PROJECTS_QUERY,
  });

  const { data: projects } = await client.query({
    query: GET_PROJECTS_BY_TECHNOLOGY,
    variables: {
      first: ITEMS_PER_PAGE,
      skip: startIndex,
    },
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