import { gql } from "@apollo/client";
import { Curriculum } from "../types/Curriculum";
import { About } from "../types/About";
import { Project } from "../types/Project";
import { Technology } from "../types/Technology";

export type GetHomePageDataResponse = {
  curriculum: Curriculum;
  about: About;
  projects: Project[];
  technologies: Technology[];
};

export const GET_HOME_PAGE_DATA_QUERY = gql`
  query MyQuery {
    curriculum {
      file {
        url(imgixParams: {})
      }
    }

    about {
      description(markdown: true)
    }

    projects: allProjects(
      filter: { displayOnHomepage: { eq: true } }
      orderBy: [priority_ASC, createdAt_DESC]
      first: "6"
    ) {
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

    technologies: allTechnologies(orderBy: createdAt_ASC) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;
