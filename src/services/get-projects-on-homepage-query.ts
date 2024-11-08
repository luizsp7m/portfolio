import { gql } from "@apollo/client";
import { Project } from "../types/Project";

export type GetProjectsOnHomepageResponse = {
  allProjects: Array<Project>;
};

export const GET_PROJECTS_ON_HOMEPAGE_QUERY = gql`
  query MyQuery {
    allProjects(
      filter: { displayOnHomepage: { eq: true } }
      orderBy: createdAt_DESC
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
  }
`;
