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
  GET_HOME_PAGE_DATA_QUERY,
  GetHomePageDataResponse,
} from "../services/get-home-page-data-query";

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
      <AboutComponent about={about} />
      <ProjectList projects={projects} />
      <TechnologyList technologies={technologies} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: homePageDataResponse } =
    await client.query<GetHomePageDataResponse>({
      query: GET_HOME_PAGE_DATA_QUERY,
    });

  return {
    props: {
      curriculum: homePageDataResponse.curriculum,
      about: homePageDataResponse.about,
      projects: homePageDataResponse.projects,
      technologies: homePageDataResponse.technologies,
    },
  };
};
