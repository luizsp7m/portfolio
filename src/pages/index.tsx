import { GetServerSideProps } from "next";
import { Layout } from "../layout";
import { Hero } from "../components/Hero";
import { About as AboutComponent } from "../components/About";
import { ProjectList } from "../components/ProjectList";
import { TechnologyList } from "../components/TechnologyList";
import { client } from "../lib/apollo";
import { Project } from "../types/Project";
import { Technology } from "../types/Technology";
import { Curriculum } from "../types/Curriculum";
import { About } from "../types/About";

import {
  GET_PROJECTS_ON_HOMEPAGE_QUERY,
  GetProjectsOnHomepageResponse,
} from "../services/get-projects-on-homepage-query";

import {
  GET_TECHNOLOGIES_QUERY,
  GetTechnologiesResponse,
} from "../services/get-technologies-query";

import {
  GET_CURRICULUM_QUERY,
  GetCurriculumResponse,
} from "../services/get-curriculum-query";

import { GET_ABOUT_QUERY, GetAboutResponse } from "../services/get-about-query";
import { HeroAlternative } from "../components/HeroAlternative";

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
  about,
}: Props) {
  return (
    <Layout title="Luiz Oliveira - Portfólio" isHomepage>
      <Hero curriculum={curriculum} />
      {/* <HeroAlternative curriculum={curriculum} /> */}
      <AboutComponent about={about} />
      <ProjectList projects={projects} />
      <TechnologyList technologies={technologies} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: projects } = await client.query<GetProjectsOnHomepageResponse>({
    query: GET_PROJECTS_ON_HOMEPAGE_QUERY,
  });

  const { data: technologies } = await client.query<GetTechnologiesResponse>({
    query: GET_TECHNOLOGIES_QUERY,
  });

  const { data: curriculum } = await client.query<GetCurriculumResponse>({
    query: GET_CURRICULUM_QUERY,
  });

  const { data: about } = await client.query<GetAboutResponse>({
    query: GET_ABOUT_QUERY,
  });

  return {
    props: {
      projects: projects.allProjects,
      technologies: technologies.allTechnologies,
      curriculum: curriculum.curriculum,
      about: about.about,
    },
  };
};
