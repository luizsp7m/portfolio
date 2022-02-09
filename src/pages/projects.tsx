import Head from "next/head";
import styles from "../styles/projects.module.scss";
import Aos from "aos";

import { Header } from "../components/Header";
import { Project } from "../types";
import { GetStaticProps } from "next";
import { getProjects } from "../services/datocms";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect } from "react";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  }
}