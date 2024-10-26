import { About, Curriculum, GetAboutResponse, GetCurriculumResponse, GetLatestProjectsResponse, GetTechnologiesResponse, Project, Technology } from "../types";
import { GetServerSideProps } from "next";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { About as AboutComponent } from "../components/About";
import { ProjectList } from "../components/ProjectList";
import { TechnologyList } from "../components/TechnologyList";
import { client } from "../services/apollo";
import { GET_ABOUT_QUERY, GET_CURRICULUM_QUERY, GET_LATEST_PROJECTS_QUERY, GET_TECHNOLOGIES_QUERY } from "../graphql/queries";

interface Props {
  projects: Array<Project>;
  technologies: Array<Technology>;
  curriculum: Curriculum;
  about: About;
}

export default function Home({ 
  projects,
   technologies,
    curriculum, 
    about 
  }: Props) {
  return (
    <Layout title="Luiz Oliveira - Portfólio" currentPage="home">
      <Hero curriculum={curriculum} />
      <AboutComponent about={about} />
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

  const { data: curriculum } = await client.query<GetCurriculumResponse>({
    query: GET_CURRICULUM_QUERY
  });

  const { data: about } = await client.query<GetAboutResponse>({
    query: GET_ABOUT_QUERY
  });

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      curriculum: curriculum.curriculum,
      about: about.about,
    }
  }
}