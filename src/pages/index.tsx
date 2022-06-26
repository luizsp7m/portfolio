import Head from "next/head";
import styles from "../styles/home.module.scss";
import Aos from "aos";

import { Project, Technology } from "../types";
import { GetStaticProps } from "next";
import { useEffect } from "react";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { gql } from "@apollo/client";
import { client } from "../services/apollo";

interface GetTechnologiesPinnedResponse {
  allTechnologies: Array<Technology>
}

interface GetProjectsPinnedResponse {
  allProjects: Array<Project>;
}

const GET_TECHNOLOGIES_PINNED_QUERY = gql`
  query MyQuery($first: IntType) {
    allTechnologies(orderBy: createdAt_ASC, filter: {pinned: {eq: "true"}, display: {eq: "true"}}, first: $first) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;

const GET_PROJECTS_PINNED_QUERY = gql`
  query MyQuery($first: IntType) {
    allProjects(filter: {pinned: {eq: "true"}, display: {eq: "true"}}, orderBy: createdAt_DESC, first: $first) {
      id
      title
      description
      deploy
      repository
      thumbnail {
        url
      }
      technologies {
        id
        name
        slug
        logo {
          url
        }
      }
    }
  }
`;

interface HomeProps {
  technologies: Array<Technology>;
  projects: Array<Project>;
}

export default function Home({ technologies, projects }: HomeProps) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portfólio - Luiz Oliveira</title>
      </Head>

      <div className={styles.container}>
        <Header to="projetos" />

        <div className={styles.main}>
          <Hero />
          <About />
          <Menu />
          <Projects projects={projects} />
          <Technologies technologies={technologies} />
        </div>

        <Footer paddingBottom={true} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: technologies } = await client.query<GetTechnologiesPinnedResponse>({
    query: GET_TECHNOLOGIES_PINNED_QUERY,
    variables: {
      first: 12
    }
  });

  const { data: projects } = await client.query<GetProjectsPinnedResponse>({
    query: GET_PROJECTS_PINNED_QUERY,
    variables: {
      first: 6
    }
  });

  return {
    props: {
      technologies: technologies.allTechnologies,
      projects: projects.allProjects,
    },

    revalidate: 86400,
  }
}