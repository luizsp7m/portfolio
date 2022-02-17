import Head from "next/head";
import Aos from "aos";
import styles from "../styles/home.module.scss";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Menu } from "../components/Menu";
import { ProjectList } from "../components/ProjectList";
import { Technologies } from "../components/Technologies";
import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { GetStaticProps } from "next";
import { getProjects, getTechnologies } from "../services/datocms";
import { Project, Technology } from "../types";
import { Footer } from "../components/Footer";
import { About } from "../components/About";

interface HomeProps {
  projects: Project[];
  technologies: Technology[];
}

export default function Home({ projects, technologies }: HomeProps) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
      <title>Luiz Oliveira - Início</title>
      </Head>

      <Header destination="projects" />
      <Menu />
      <Hero />
      <About />
      <ProjectList projects={projects} />
      <Technologies technologies={technologies} />
      <Contact />
      <Footer paddingBottom={true} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProjects().then(response => {
    return response.filter(project => project.pinned === true);
  });
  
  const technologies = await getTechnologies();

  return {
    props: {
      projects,
      technologies,
    },
  }
}