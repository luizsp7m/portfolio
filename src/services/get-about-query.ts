import { gql } from "@apollo/client";
import { About } from "../types/About";

export type GetAboutResponse = {
  about: About;
};

export const GET_ABOUT_QUERY = gql`
  query MyQuery {
    about {
      description(markdown: true)
    }
  }
`;
