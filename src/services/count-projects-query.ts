import { gql } from "@apollo/client";

export type CountProjectsResponse = {
  _allProjectsMeta: {
    count: number;
  };
};

export const COUNT_PROJECTS_QUERY = gql`
  query MyQuery($allIn: [ItemId]) {
    _allProjectsMeta(filter: { technologies: { allIn: $allIn } }) {
      count
    }
  }
`;
