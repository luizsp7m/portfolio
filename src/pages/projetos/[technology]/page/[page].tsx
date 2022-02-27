import Link from "next/link";
import Head from "next/head";
import styles from "../../../../styles/projects.module.scss";

import { getCountProjects, getProjects, getProjectsByTechnology, getTechnologies, getTechnologyBySlug } from "../../../../services/datocms";
import { GetStaticPaths, GetStaticProps } from "next";

import { Header } from "../../../../components/Header";
import { Project, Technology } from "../../../../types";
import { ProjectCard } from "../../../../components/ProjectCard";
import { Footer } from "../../../../components/Footer";
import { TechnologyNavigation } from "../../../../components/TechnologyNavigation";

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
            <h1>Projetos</h1>

            <p>Lista de projetos desenvolvidos com {technology.name}</p>

            {/* <TechnologyNavigation technologies={technologies} technologyId={technology.id} /> */}

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
  const technologies = await getTechnologies();

  const counter = technologies.map(async technology => {
    const numberProjects = await getCountProjects(technology.id);

    let numberPages = Math.ceil(numberProjects / ITEMS_PER_PAGE);
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
  const technology = await getTechnologyBySlug(params.technology + "");
  const technologies = await getTechnologies();
  const projects = await getProjectsByTechnology(technology.id);

  const numberPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentPage = Number(params.page);

  const startIndex = currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProjects = projects.slice(startIndex, endIndex);

  return {
    props: {
      projects: currentProjects,
      technologies,
      technology,
      numberPages,
      currentPage,
    },

    revalidate: 86400,
  }
}