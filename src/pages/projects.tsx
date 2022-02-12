import Head from "next/head";
import styles from "../styles/projects.module.scss";
import Aos from "aos";

import { Header } from "../components/Header";
import { Project, Technology } from "../types";
import { GetStaticProps } from "next";
import { getProjects, getTechnologies } from "../services/datocms";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect, useState } from "react";

interface ProjectsProps {
  projects: Project[];
  technologies: Technology[];
}

export default function Projects({ projects, technologies }: ProjectsProps) {
  const [projectsFiltered, setProjectsFiltered] = useState<Project[]>(projects);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if(filter === "") return;

    const newProjectsFiltered = [];

    projects.map(project => {
      const technologyExistsInProject = project.technologies.find(technology => technology.name === filter);

      if(technologyExistsInProject) {
        newProjectsFiltered.push(project);
      }
    });

    setProjectsFiltered(newProjectsFiltered);

  }, [filter]);

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
          <select onChange={({ target }) => setFilter(target.value)}>
            { technologies.map(technology => (
              <option key={technology.id} value={technology.name}>{technology.name}</option>
            )) }
          </select>
        </div>

        <div className={styles.main}>
          {projectsFiltered.map(project => (
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

        <div className={styles.pagination}>
          
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProjects();
  const technologies = await getTechnologies();

  return {
    props: {
      projects,
      technologies,
    },
  }
}