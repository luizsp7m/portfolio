import { gql } from "@apollo/client";
import { Technology } from "../types/Technology";

export type GetTechnologyResponse = {
  technology: Technology;
};

export const GET_TECHNOLOGY_QUERY = gql`
  query MyQuery($slug: String) {
    technology(filter: { slug: { eq: $slug } }) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;
