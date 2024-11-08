import { gql } from "@apollo/client";
import { Technology } from "../types/Technology";

export type GetTechnologiesResponse = {
  allTechnologies: Array<Technology>;
};

export const GET_TECHNOLOGIES_QUERY = gql`
  query MyQuery {
    allTechnologies(orderBy: createdAt_ASC) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;
