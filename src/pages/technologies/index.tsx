import { GetServerSideProps } from "next";
import { getProjects, getTechnologies } from "../../services/datocms";
import { Project, Technology } from "../../types";
import { Header } from "../../components/Header";

import styles from "../../styles/projects.module.scss";
import { ProjectCard } from "../../components/ProjectCard";
import { useEffect, useState } from "react";

interface TechnologiesProps {
  projects: Array<Project>;
  technologies: Array<Technology>;
}

export default function Technologies({ projects, technologies }: TechnologiesProps) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [projectsFiltered, setProjectsFiltered] = useState<Project[]>(projects);

  function changeFilter(id: string) {
    const technology = technologies.find(technology => technology.id === id);
    
    setCurrentFilter({
      id: technology.id,
      name: technology.name,
    });
  }

  useEffect(() => {
    if(!currentFilter) return;

    
  }, [currentFilter]);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.row}>
            <h1>Projetos</h1>

            <select onChange={({ target }) => changeFilter(target.value)}>
              {technologies.map(technology => (
                <option
                  key={technology.id}
                  value={technology.id}
                >
                  {technology.name}
                </option>
              ))}
            </select>
          </div>
          <p>{ currentFilter ? `Lista de projetos desenvolvidos com ${currentFilter.name}` :  "Lista de todos os projetos que desenvolvi durante minha trajetória"}</p>
        </div>

        <div className={`${styles.main} ${projects.length === 0 && styles.nothing}`}>
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
              animation={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getProjects();
  const technologies = await getTechnologies();

  return {
    props: {
      projects,
      technologies,
    }
  }
}