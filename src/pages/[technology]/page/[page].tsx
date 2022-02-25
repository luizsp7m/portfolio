import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../../components/Header";
import { ProjectCard } from "../../../components/ProjectCard";
import { getCountProjects, getProjectsByTechnology, getTechnologies, getTechnologyBySlug } from "../../../services/datocms";

import styles from "../../../styles/projects.module.scss";
import { Project, Technology } from "../../../types";
import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "../../../components/Footer";

const ITEMS_PER_PAGE = 6;

interface PageProps {
  projects: Project[];
  technology: Technology;
  pages: number;
  currentPage: number;
  technologies: Technology[];
}

export default function Page({ technology, projects, pages, currentPage, technologies }: PageProps) {
  const router = useRouter();

  function redirectUser(slug: string) {
    router.push(`/${slug}/page/1`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Luiz Oliveira - {technology.name} - Página {currentPage}</title>
      </Head>

      <Header showNavbar={true} />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.row}>
            <h1>Projetos</h1>

            <select onChange={({ target }) => redirectUser(target.value)} value={technology.slug}>
              {technologies.map(technology => (
                <option key={technology.id} value={technology.slug}>
                  {technology.name}
                </option>
              ))}
            </select>
          </div>
          <p>Lista de projetos desenvolvidos com {technology.name}</p>
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

      <Footer paddingBottom={false} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const technologies = await getTechnologies();

  const counter = technologies.map(async technology => {
    const count = await getCountProjects(technology.id);

    let numberPages = Math.ceil(count / ITEMS_PER_PAGE);
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
  const technologies = await getTechnologies();
  const technology = await getTechnologyBySlug(`${params.technology}`);
  const projects = await getProjectsByTechnology(technology.id);
  const pages = await getCountProjects(technology.id);

  const startIndex = (Number(params.page) * ITEMS_PER_PAGE) - 6;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return {
    props: {
      technologies,
      technology,
      projects: projects.slice(startIndex, endIndex),
      pages: Math.ceil(pages / ITEMS_PER_PAGE),
      currentPage: Number(params.page),
    },

    revalidate: 86400, // 24h
  };
}
