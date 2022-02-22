import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../../components/Header";
import { NavFilter } from "../../../components/NavFilter";
import { ProjectCard } from "../../../components/ProjectCard";
import { getCountProjects, getProjects, getProjectsByTechnology, getTechnologies, getTechnologyBySlug } from "../../../services/datocms";

import styles from "../../../styles/projects.module.scss";
import { Project, Technology } from "../../../types";
import Head from "next/head";

const ITEMS_PER_PAGE = 6;

interface PageProps {
  projects: Project[];
  technology: Technology;
  pages: number;
  currentPage: number;
}

export default function Page({ technology, projects, pages, currentPage }: PageProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{technology.name} - Página {currentPage}</title>
      </Head>

      <Header />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Projetos</h1>
          <p>Lista de projetos desenvolvidos com {technology.name}</p>
          <NavFilter />
        </div>

        <div className={`${styles.main} ${projects.length === 0 && styles.nothing}`}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              repository={project.repository}
              deploy={project.deploy}
              thumbnail={project.thumbnail.url}
              technologies={project.technologies}
              animation={false}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          {Array.from(Array(pages), (item, index) => {
            return <Link key={index} href={`/${technology.slug}/page/${index + 1}`} passHref>
              <a
                className={`${styles.paginationItem} ${currentPage === (index + 1) && styles.selected}`}
              >{index + 1}</a>
            </Link>
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const technologies = await getTechnologies();

  const counter = technologies.map(async technology => {
    const count = await getCountProjects(technology.id);

    let numberPages = Math.ceil(count / 6);
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
    fallback: false // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const technology = await getTechnologyBySlug(`${params.technology}`);
  const projects = await getProjectsByTechnology(technology.id);
  const pages = await getCountProjects(technology.id);

  const startIndex = (Number(params.page) * ITEMS_PER_PAGE) - 6;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return {
    props: {
      technology,
      projects: projects.slice(startIndex, endIndex),
      pages: Math.ceil(pages / ITEMS_PER_PAGE),
      currentPage: Number(params.page),
    }
  };
}