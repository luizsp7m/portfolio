import Link from "next/link";
import Head from "next/head";
import styles from "../../../styles/projects.module.scss";

import { getProjects, getTechnologies } from "../../../services/datocms";
import { GetStaticPaths, GetStaticProps } from "next";

import { Header } from "../../../components/Header";
import { Project, Technology } from "../../../types";
import { ProjectCard } from "../../../components/ProjectCard";
import { Footer } from "../../../components/Footer";
import { TechnologyNavigation } from "../../../components/TechnologyNavigation";

const ITEMS_PER_PAGE = 9;

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
              <TechnologyNavigation technologies={technologies} />
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
  const projects = await getProjects();

  const numberPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

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
  const projects = await getProjects();
  const technologies = await getTechnologies();

  const numberPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentPage = Number(params.page);

  const startIndex = currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProjects = projects.slice(startIndex, endIndex);

  return {
    props: {
      projects: currentProjects,
      technologies,
      numberPages,
      currentPage,
    },

    revalidate: 86400,
  }
}