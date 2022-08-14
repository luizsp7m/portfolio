import { Curriculum, Project, Technology } from "../types";
import { GetServerSideProps, GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { ProjectList } from "../components/ProjectList";
import { TechnologyList } from "../components/TechnologyList";
import { client } from "../services/apollo";
import { GET_CURRICULUM_QUERY, GET_LATEST_PROJECTS_QUERY, GET_TECHNOLOGIES_QUERY } from "../graphql/queries";

interface Props {
  projects: Array<Project>;
  technologies: Array<Technology>;
  curriculum: Curriculum;
}

interface GetLatestProjectsResponse {
  allProjects: Array<Project>;
}

interface GetTechnologiesResponse {
  allTechnologies: Array<Technology>;
}

export default function Home({ projects, technologies, curriculum }: Props) {
  return (
    <Layout title="Portfólio - Luiz Oliveira" currentPage="home">
      <Hero curriculum={curriculum} />
      <About />
      <ProjectList projects={projects} />
      <TechnologyList technologies={technologies} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: projects } = await client.query<GetLatestProjectsResponse>({
    query: GET_LATEST_PROJECTS_QUERY
  });

  const { data: technologies } = await client.query<GetTechnologiesResponse>({
    query: GET_TECHNOLOGIES_QUERY
  });

  const { data: curriculum } = await client.query({
    query: GET_CURRICULUM_QUERY
  });

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      curriculum: curriculum.curriculum,
    }
  }
}