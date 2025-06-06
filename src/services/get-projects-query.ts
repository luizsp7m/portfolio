import { gql } from "@apollo/client";
import { Project } from "../types/Project";

export type GetProjectsResponse = {
  allProjects: Array<Project>;
};

export const GET_PROJECTS_QUERY = gql`
  query MyQuery($first: IntType, $skip: IntType, $allIn: [ItemId]) {
    allProjects(
      orderBy: [priority_ASC, displayOnHomepage_DESC, createdAt_DESC]
      first: $first
      skip: $skip
      filter: { technologies: { allIn: $allIn } }
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
