import Head from "next/head";
import styles from "../../styles/projects.module.scss";

import { GetStaticPaths, GetStaticProps } from "next";
import { getProjects, getProjectsByTechnology, getTechnologies, getTechnologyByID } from "../../services/datocms";
import { Project, Technology } from "../../types";
import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { useRouter } from "next/router";
import { Footer } from "../../components/Footer";

interface SlugProps {
  projects: Project[];
  technology: Technology;
  technologies: Technology[];
}

export default function Slug({ projects, technology, technologies }: SlugProps) {
  const router = useRouter();

  function changeFilter(slug: string) {
    router.push(`/projects/${slug}`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Luiz Oliveira - Projetos com {technology.name}</title>
      </Head>

      <Header destination="home" />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.row}>
            <h1>Projetos</h1>

            <select onChange={({ target }) => changeFilter(target.value)} defaultValue={technology.slug}>
              {technologies.map(technology => (
                <option
                  key={technology.id}
                  value={technology.slug}
                >
                  {technology.name}
                </option>
              ))}
            </select>
          </div>
          <p>Lista de projetos desenvolvidos com {technology.name}</p>
        </div>

        <div className={styles.main}>
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
      </div>

      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];

  const technologies = await getTechnologies();

  technologies.forEach(technology => {
    paths.push({ params: { slug: technology.slug } });
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const technology = await getTechnologyByID(`${params.slug}`);
  const projects = await getProjectsByTechnology(technology.id);
  const technologies = await getTechnologies();

  return {
    props: {
      projects,
      technologies,
      technology,
    }
  }
}
