import styles from "../styles/home.module.scss";
import Aos from "aos";

import { Project, Technology } from "../types";
import { GetStaticProps } from "next";
import { getProjectsPinned, getTechnologies } from "../services/datocms";
import { useEffect } from "react";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";
import { Menu } from "../components/Menu";
import Head from "next/head";

interface HomeProps {
  projects: Array<Project>;
  technologies: Array<Technology>;
}

export default function Home({ projects, technologies }: HomeProps) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portfólio - Luiz Oliveira</title>
      </Head>

      <div className={styles.container}>
        <Header />

        <div className={styles.main}>
          <Hero />
          <About />
          <Projects projects={projects} />
          <Technologies technologies={technologies} />
          <Menu />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjectsPinned();
  const technologies = await getTechnologies();

  return {
    props: {
      projects,
      technologies,
    }
  }
}