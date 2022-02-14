import Aos from "aos";
import styles from "../../styles/projects.module.scss";

import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { getProjects, getTechnologies, getTechnologyByID } from "../../services/datocms";
import { Project } from "../../types";
import Head from "next/head";
import { Header } from "../../components/Header";

export default function Technology({ projects, technology }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className={styles.container}>
    <Head>
      <title>Luiz Oliveira - Projetos</title>
    </Head>

    <Header destination="home" />

    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Projetos</h1>
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
  </div>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  let paths = [];

  const technologies = await getTechnologies().then(response => {
    return response.map(technology => technology.id)
  });

  for (let id in technologies) {
    paths.push({
      params: { technology: technologies[id] }
    });
  }

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects: Project[] = await getProjects();
  const technology = await getTechnologyByID(params.technology + "");

  let filtered = [];

  projects.map(project => {
    const exists = project.technologies.find(technology => technology.id === params.technology );

    if (exists) {
      filtered.push(project);
    }
  });

  return {
    props: {
      projects: filtered,
      technology,
    }
  }
};